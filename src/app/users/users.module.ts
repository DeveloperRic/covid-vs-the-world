import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRedirectComponent } from './redirect/redirect.component';
import { LoginDeletedComponent } from './deleted/deleted.component';



@NgModule({
  declarations: [LoginComponent, LoginRedirectComponent, LoginDeletedComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
