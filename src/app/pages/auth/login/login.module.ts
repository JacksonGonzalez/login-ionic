import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { RegisterPage } from '../register/register.page';
import { RegisterPageModule } from '../register/register.module';

@NgModule({
  // entryComponents: [
  //   RegisterPage
  // ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule,
    // RegisterPageModule
  ],
  declarations: [LoginPage]
})
export class LoginPageModule {}
