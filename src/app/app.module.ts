import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ElsoOraComponent } from './elso-ora/elso-ora.component';
import { AppRoutingModule } from './app-routing.module';
import { ErrorComponent } from './error/error.component';
import { ParameterProbaComponent } from './parameter-proba/parameter-proba.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule, HttpClientModule],
  declarations: [
    AppComponent,
    HelloComponent,
    ElsoOraComponent,
    ErrorComponent,
    ParameterProbaComponent,
    LoginComponent,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
