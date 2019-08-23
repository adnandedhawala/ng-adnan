import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { DataprocessService } from '../dataprocess.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private auth: AuthService, private route: Router, private ds: DataprocessService) { }

  ngOnInit() {
    this.auth.deleteKey();
    this.ds.passName({uname:""});
    this.route.navigate(['/loginPage']);
  }

}
