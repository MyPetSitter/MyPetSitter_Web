import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { MatSidenavModule } from "@angular/material/sidenav";
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './components/views/home/home.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from "@angular/common/http";
import { CriarContaComponent } from './components/views/criar-conta/criar-conta.component';
import {MatListModule} from '@angular/material/list';
import { ComoFuncionaComponent } from './components/views/como-funciona/como-funciona.component';
import {MatIconModule} from '@angular/material/icon';
import { QueroSerPetsitterComponent } from './components/views/quero-ser-petsitter/quero-ser-petsitter.component';
import { EntrarComponent } from './components/views/entrar/entrar.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CriarContaComponent,
    ComoFuncionaComponent,
    QueroSerPetsitterComponent,
    EntrarComponent,
  ],
  imports: [
    BrowserModule,
    MatSidenavModule,
    MatListModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatCheckboxModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
