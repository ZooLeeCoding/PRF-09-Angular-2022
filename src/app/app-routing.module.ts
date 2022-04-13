import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ElsoOraComponent } from './elso-ora/elso-ora.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { ParameterProbaComponent } from './parameter-proba/parameter-proba.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'elso', component: ElsoOraComponent },
  // szeretném, ha az alkalmazás betöltésekor egyből átirányítani az elso route-ra, ez lenne a default route
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // azok a paraméterek, amiket eleve a route definíciójához hozzáadok, azok kötelezőek, vagyis ha a parameter route-ot nem úgy hívom meg, hogy pl. /parameter/12 vagy /parameter/alma akkor az Angular nem fogja validnak érzékelni és a wildcard fog lefutni helyette
  { path: 'parameter/:id', component: ParameterProbaComponent },
  // az Angular a route-ok párosítását a routes tömbön sorban végigiterálva próbálja elvégezni, az első egyezést fogja felhasználni. A wildcard (**) minden létező stringre egyezést mutat, tehát ha nem a tömb végére kerül, akkor kitakarja az őt követő route definíciókat!
  { path: '**', component: ErrorComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
