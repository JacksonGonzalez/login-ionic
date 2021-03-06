import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { MenuController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  
  user : User;

  constructor(private menuCtrl: MenuController, private authService: AuthService) { 
    this.menuCtrl.enable(true);
  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.authService.user().subscribe(
      user => {
        this.user = user;
      }
    );
  }

}
