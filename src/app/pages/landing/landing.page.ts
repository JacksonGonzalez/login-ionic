import { Component, OnInit } from '@angular/core';
import { ModalController, MenuController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { RegisterPage } from '../auth/register/register.page';
import { LoginPage } from '../auth/login/login.page';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {

  constructor(private modalCtrl : ModalController, private menuCtrl: MenuController,
              private authService: AuthService, private navCtrl: NavController) {

                this.menuCtrl.enable(false);
               }

  //VERIFICA SI ESTA LOGUEADO Y LO ENVIA AL DASBOARD.
  ionViewWillEnter() {
    this.authService.getToken().then(() => {
      if(this.authService.isLoggedIn) {
        this.navCtrl.navigateRoot('/dashboard');
      }
    });
  }


 ngOnInit() {
  }

  // REGISTRARSE
  async register() {
    const registerModal = await this.modalCtrl.create({
      component: RegisterPage
    });
    return await registerModal.present();
  }

  // INICIAR SESION
  async login() {
    const loginModal = await this.modalCtrl.create({
      component: LoginPage,
    });
    return await loginModal.present();
  }

}
