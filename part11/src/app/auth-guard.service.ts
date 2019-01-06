import { CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot, Router, CanActivateChild} from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {

    constructor(private authService: AuthService,
                private router: Router) {}


    canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this.authService.inAutenticated()
            .then(
                (authenticated: boolean) => {
                    if (authenticated) {
                        return true;
                    } else {
                        this.router.navigate(['/']);
                    }
                }
            );
    }
    canActivateChild(route: ActivatedRouteSnapshot,
                    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
            return this.canActivate(route, state);  
        }

    }
}
