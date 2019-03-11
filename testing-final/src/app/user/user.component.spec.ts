/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync, tick } from '@angular/core/testing';
import { UserComponent } from './user.component';
import { UserService } from './user.service';
import { DataService } from '../shared/data.service';

describe('Component: User', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserComponent]
    });
  });

  it('should create the app', () => {
    // tslint:disable-next-line:prefer-const
    let fixture = TestBed.createComponent(UserComponent);
    // tslint:disable-next-line:prefer-const
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should use the user name from the service', () => {
    // tslint:disable-next-line:prefer-const
    let fixture = TestBed.createComponent(UserComponent);
    // tslint:disable-next-line:prefer-const
    let app = fixture.debugElement.componentInstance;
    // tslint:disable-next-line:prefer-const
    let userService = fixture.debugElement.injector.get(UserService);
    fixture.detectChanges();
    expect(userService.user.name).toEqual(app.user.name);
  });

  it('should display the user name if user is logged in', () => {
    // tslint:disable-next-line:prefer-const
    let fixture = TestBed.createComponent(UserComponent);
    // tslint:disable-next-line:prefer-const
    let app = fixture.debugElement.componentInstance;
    app.isLoggedIn = true;
    fixture.detectChanges();
    // tslint:disable-next-line:prefer-const
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain(app.user.name);
  });

  it('shouldn\'t display the user name if user is not logged in', () => {
    // tslint:disable-next-line:prefer-const
    let fixture = TestBed.createComponent(UserComponent);
    // tslint:disable-next-line:prefer-const
    let app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    // tslint:disable-next-line:prefer-const
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('p').textContent).not.toContain(app.user.name);
  });

  it('shouldn\'t fetch data successfully if not called asynchronously', () => {
    // tslint:disable-next-line:prefer-const
    let fixture = TestBed.createComponent(UserComponent);
    // tslint:disable-next-line:prefer-const
    let app = fixture.debugElement.componentInstance;
    // tslint:disable-next-line:prefer-const
    let dataService = fixture.debugElement.injector.get(DataService);
    // tslint:disable-next-line:prefer-const
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    expect(app.data).toBe(undefined);
  });

  it('should fetch data successfully if called asynchronously', async(() => {
    // tslint:disable-next-line:prefer-const
    let fixture = TestBed.createComponent(UserComponent);
    // tslint:disable-next-line:prefer-const
    let app = fixture.debugElement.componentInstance;
    // tslint:disable-next-line:prefer-const
    let dataService = fixture.debugElement.injector.get(DataService);
    // tslint:disable-next-line:prefer-const
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    fixture.whenStable().then(() => {
      expect(app.data).toBe('Data');
    });
  }));

  it('should fetch data successfully if called asynchronously', fakeAsync(() => {
    // tslint:disable-next-line:prefer-const
    let fixture = TestBed.createComponent(UserComponent);
    // tslint:disable-next-line:prefer-const
    let app = fixture.debugElement.componentInstance;
    // tslint:disable-next-line:prefer-const
    let dataService = fixture.debugElement.injector.get(DataService);
    // tslint:disable-next-line:prefer-const
    let spy = spyOn(dataService, 'getDetails')
      .and.returnValue(Promise.resolve('Data'));
    fixture.detectChanges();
    tick();
    expect(app.data).toBe('Data');

  }));
});
