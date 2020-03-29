import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LoginRedirectComponent } from './redirect/redirect.component';
import { DeletedComponent } from './deleted/deleted.component';



@NgModule({
  declarations: [LoginComponent, LoginRedirectComponent, DeletedComponent],
  imports: [
    CommonModule
  ]
})
export class UsersModule { }
