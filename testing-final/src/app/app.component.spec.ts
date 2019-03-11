/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';

describe('App: CompleteGuideFinalWebpack', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    });
  });

  it('should create the app', async(() => {
    // tslint:disable-next-line:prefer-const
    let fixture = TestBed.createComponent(AppComponent);
    // tslint:disable-next-line:prefer-const
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    // tslint:disable-next-line:prefer-const
    let fixture = TestBed.createComponent(AppComponent);
    // tslint:disable-next-line:prefer-const
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a h1 tag', async(() => {
    // tslint:disable-next-line:prefer-const
    let fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    // tslint:disable-next-line:prefer-const
    let compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('app works!');
  }));
});
