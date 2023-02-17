import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { JesComponent } from './components/jes/jes.component';
import { PartLinkComponent } from './components/part-link/part-link.component';
import { FooterComponent } from './components/main/footer/footer.component';
import { HeaderComponent } from './components/main/header/header.component';
import { MainComponent } from './components/main/main.component';
import { ResAgenComponent } from './components/res-agen/res-agen.component';
import { RnaComponent } from './components/rna/rna.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ResAgenComponent,
    JesComponent,
    RnaComponent,
    PartLinkComponent,
    MainComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
