import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, Subscription } from 'rxjs';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  numberObsSubscription: Subscription;
  customObsSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    const myNumbers = Observable.interval(1000).map(
      (data: number) => {
        return data * 2;
        }
      );
    this.numberObsSubscription = myNumbers.subscribe(
        (number: number) => {
            console.log(number);
      }
    );

    const myObservable = Observable.create((observer: Observer<string>) => {
      setTimeout(() => {
        observer.next('first package');
      }, 2000);
      setTimeout(() => {
        observer.next('second package');
      }, 5000);
      setTimeout(() => {
        observer.complete();
      }, 7000);
    });
    this.customObsSubscription = myObservable.subscribe(
      (data: string) => {console.log(data); },
      (error: string) => {console.log(error); },
      () => {console.log('complete'); }
      );
    }
    ngOnDestroy() {
      this.numberObsSubscription.unsubscribe();
      this.customObsSubscription.unsubscribe();
    }

}
