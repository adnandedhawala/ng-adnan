import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import{MustMatch} from '../customValidators/confirmPassword';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public registerForm: FormGroup;
  public loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.registerForm = formBuilder.group({
      userName: new FormControl(),
      userEmail: new FormControl(),
      userMobile: new FormControl(),
      userPassword: new FormControl(),
      userConfirmPassword: new FormControl()

    });
    this.loginForm = formBuilder.group({
      userEmail: new FormControl(),
      userPassword: new FormControl()
    });
  }

  ngOnInit() {
    this.registerForm= this.formBuilder.group({
      userName:['',[Validators.required,Validators.maxLength(15),Validators.minLength(2)]],
      userMobile:['',Validators.required],
      userEmail:['',[Validators.required,Validators.email]],
      userPassword:['',Validators.required],
      userConfirmPassword:['',Validators.required],
    },{
      validator:MustMatch('userPassword','userConfirmPassword')
    });

    this.loginForm= this.formBuilder.group({
      userEmail:['',[Validators.required,Validators.email,]],
      userPassword:['',Validators.required]
    });
  }

  RegisterData(formData) {
    console.log(formData);
  }
  LoginData(formData) {
    console.log(formData);
  }

}
// please edit custom validation for password