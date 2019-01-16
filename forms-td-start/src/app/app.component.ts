import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { resolve } from 'path';
import { reject } from 'q';
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // @ViewChild('f') signupForm: NgForm;
  // defaultQuestion = 'pet';
  // answer = '';
  genders = ['male', 'female'];
  signupForm: FormGroup;
  forbiddenUsername = ['Chris', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
        'email': new FormControl(null, [Validators.required, Validators.email], this.forbiddenMails),
      }),
      'gender': new FormControl('male'),
      'hobbies': new FormArray([])
    });
    // this.signupForm.valueChanges.subscribe(
    //   (value) => console.log(value)
    // );
    this.signupForm.statusChanges.subscribe(
      (status) => console.log(status)
    );
    this.signupForm.setValue({
      'userData': {
        'username': 'Arthur',
        'email': 'arthur@test.com'
      },
      'gender': 'male',
      'hobbies': []
    });
    this.signupForm.patchValue({
      'userData': {
        'username': 'Andrij'
      }
    });
  }
  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset();
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  forbiddenNames(control: FormControl): {[s: string]: boolean} {
    if (this.forbiddenUsername.indexOf(control.value) !== -1) {
      return {'nameIsForbidden': true};
    }
    return null;
  }
  forbiddenMails(control: FormControl): Promise<any> | Observable<any> {
    // tslint:disable-next-line:no-shadowed-variable
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({'emailIsForbidden': true});
        } else {
          resolve (null);
        }
      }, 1500);
    });
    return promise;
  }
  // user = {
  //   username: '',
  //   email: '',
  //   secretQuestion: '',
  //   answer: '',
  //   gender: ''
  // };
  // submitted = false;
  // suggestUserName() {
  //   const suggestedName = 'Superuser';
  //   // this.signupForm.setValue({
  //   //   userData: {
  //   //     username: suggestedName,
  //   //     email: ''
  //   //   },
  //   //   secret: 'pet',
  //   //   questionAnswer: '',
  //   //   gender: 'male'
  //   // });
  //   this.signupForm.form.patchValue({
  //     userData: {
  //       username: suggestedName
  //     }
  //   });
  // }
  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }
  // onSubmit() {
  //   this.submitted = true;
  //   this.user.username = this.signupForm.value.userData.username;
  //   this.user.email = this.signupForm.value.userData.email;
  //   this.user.secretQuestion = this.signupForm.value.secret;
  //   this.user.answer = this.signupForm.value.questionAnswer;
  //   this.user.gender = this.signupForm.value.gender;
  //   this.signupForm.reset();
  // }
}
