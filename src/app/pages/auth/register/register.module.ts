import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { LoginPageModule } from '../login/login.module';

@NgModule({
  entryComponents: [
    
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    LoginPageModule
  ],
  exports:[
    RegisterPage
  ],
  declarations: [RegisterPage]
})
export class RegisterPageModule {}
