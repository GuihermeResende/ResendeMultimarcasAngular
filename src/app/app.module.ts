import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { MenuLateralComponent } from './menu-lateral/menu-lateral.component';
import { VeiculosChevroletComponent } from './veiculos-chevrolet/veiculos-chevrolet.component';
import { VeiculosFiatComponent } from './veiculos-fiat/veiculos-fiat.component';
import { HomePrincipalComponent } from './home-principal/home-principal.component';
import { VeiculosVolkswagemComponent } from './veiculos-volkswagem/veiculos-volkswagem.component';
import { VeiculosNissanComponent } from './veiculos-nissan/veiculos-nissan.component';
import { VeiculosAudiComponent } from './veiculos-audi/veiculos-audi.component';
import { VeiculosBmwComponent } from './veiculos-bmw/veiculos-bmw.component';
import { VeiculosHondaComponent } from './veiculos-honda/veiculos-honda.component';
import { VeiculosToyotaComponent } from './veiculos-toyota/veiculos-toyota.component';
import { VeiculosMercedesBenzComponent } from './veiculos-mercedes-benz/veiculos-mercedes-benz.component';
import { VeiculosHyundaiComponent } from './veiculos-hyundai/veiculos-hyundai.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MenuLateralComponent,
    VeiculosChevroletComponent,
    VeiculosFiatComponent,
    HomePrincipalComponent,
    VeiculosVolkswagemComponent,
    VeiculosNissanComponent,
    VeiculosAudiComponent,
    VeiculosBmwComponent,
    VeiculosHondaComponent,
    VeiculosToyotaComponent,
    VeiculosMercedesBenzComponent,
    VeiculosHyundaiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
