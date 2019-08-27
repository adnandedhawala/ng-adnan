import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { MustMatch } from '../customValidators/confirmPassword';
import { UserSchema } from '../model/user.model';
import { DataprocessService } from '../dataprocess.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public registerForm: FormGroup;
  public loginForm: FormGroup;
  public msg: any;

  constructor(private formBuilder: FormBuilder, private ds: DataprocessService, private route: Router, private auth: AuthService) {
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
    this.registerForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(2)]],
      userMobile: ['', Validators.required],
      userEmail: ['', [Validators.required, Validators.email]],
      userPassword: ['', Validators.required],
      userConfirmPassword: ['', Validators.required],
    }, {
        validator: MustMatch('userPassword', 'userConfirmPassword')
      });

    this.loginForm = this.formBuilder.group({
      userEmail: ['', [Validators.required, Validators.email,]],
      userPassword: ['', Validators.required]
    });
  }

  RegisterData(formData) {
    delete formData.value.userConfirmPassword;
    // data:UserSchema = formData.value;
    let UserData: UserSchema = formData.value;
    console.log(UserData);
    this.ds.insertData(UserData, "user").subscribe(
      (response) => {
        console.log(response);
        this.msg = "User Added";
        var message = "Welcome";
        // var mob = UserData.userMobile;


        var url = `http://api.msg91.com/api/sendhttp.php?country=91&sender=MSGIND&route=4&mobiles=91${UserData.userMobile}&authkey=290273ALycEkfI5d5b87b4&encrypt=&message=${message}`;
        this.ds.smsApiProcess(url).subscribe(
          (response) => {
            console.log(response);
          }
        )
      },
      (error) => {
        console.log(error);
      }
    )
  }
  LoginData(formData) {
    // console.log(formData);
    let checkEmail = formData.value.userEmail;
    let checkPassword = formData.value.userPassword;

    this.ds.getData("user").subscribe(
      (response) => {
        let flag: boolean = false;
        // console.log(response);
        for (let key in response) {
          // console.log(response[key].userEmail);
          if (response[key].userEmail == checkEmail && response[key].userPassword == checkPassword) {
            this.auth.storeKey({
              userName: response[key].userName,
              userEmail: response[key].userEmail,
              userMobile: response[key].userMobile,
              id: response[key].id,
            });
            flag = true;
            break;
          }
        }
        if (!flag) {
          this.msg = "Invalid Credentials";
        } else {
          // this.msg = "Valid Credentials";
          let username_from_storage = this.auth.getName();
          this.ds.passName({ uname: username_from_storage });
          this.route.navigate(['/']);
        }
      })
  }

}
// please edit custom validation for password