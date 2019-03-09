import { FilelistComponent } from './filelist/filelist.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { InicioComponent } from './inicio/inicio.component';

const routes: Routes = [
  {path: '' , component: InicioComponent},
  {path: 'login' , component: LoginComponent},
  {path: 'archivos' , component: FilelistComponent},
  {path: 'registro' , component: RegistroComponent},
  {path: 'inicio' , component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
