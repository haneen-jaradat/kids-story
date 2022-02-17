import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthModule } from './auth/auth.module';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
    },
    {
      path: 'register',
      component: RegisterComponent
      },
    {
      path: 'contact',
      component: ContactComponent
      },
      {
        path: 'home',
        component: HomePageComponent
        },
  
    {
    path:'',
    component: LoginComponent
  
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
