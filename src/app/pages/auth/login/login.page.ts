import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { AlertService } from 'src/app/services/alert.service';
import { RegisterPage } from '../register/register.page';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private modalCtrl: ModalController, private authService: AuthService,
              private navCtrl: NavController, private alertService: AlertService) { }

  ngOnInit() {
  }


  //CERRAR EL MODAL DE INICIO DE SESION
  dismissLogin(){
    // console.log('adios');
    this.modalCtrl.dismiss();
  }

  //modal para registrar nuevos usuarios
  async registerModal(){
    // cierro el modal de login
    this.dismissLogin();
    const registerModal = await this.modalCtrl.create({
      component: RegisterPage
    });
    return await registerModal.present();

  }


  // INICIAR SESION EN LA APP.
  login(form: NgForm){
    this.authService.login(form.value.email, form.value.password).subscribe(
      data => {
        this.alertService.presentToast("Conectado");
      },
      error => {
        console.log(error);
      },
      () => {
        this.dismissLogin();
        this.navCtrl.navigateRoot('/dashboard');
      }
    );
  }

}
