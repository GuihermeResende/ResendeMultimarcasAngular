import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePrincipalComponent } from './home-principal/home-principal.component';
import { VeiculosAudiComponent } from './veiculos-audi/veiculos-audi.component';
import { VeiculosBmwComponent } from './veiculos-bmw/veiculos-bmw.component';
import { VeiculosChevroletComponent } from './veiculos-chevrolet/veiculos-chevrolet.component';
import { VeiculosFiatComponent } from './veiculos-fiat/veiculos-fiat.component';
import { VeiculosHondaComponent } from './veiculos-honda/veiculos-honda.component';
import { VeiculosHyundaiComponent } from './veiculos-hyundai/veiculos-hyundai.component';
import { VeiculosMercedesBenzComponent } from './veiculos-mercedes-benz/veiculos-mercedes-benz.component';
import { VeiculosNissanComponent } from './veiculos-nissan/veiculos-nissan.component';
import { VeiculosToyotaComponent } from './veiculos-toyota/veiculos-toyota.component';
import { VeiculosVolkswagemComponent } from './veiculos-volkswagem/veiculos-volkswagem.component';

declare module "@angular/core" {
  interface ModuleWithProviders<T = any> {
      ngModule: Type<T>;                          //codigo que eu coloquei
      providers?: Provider[];
  }
}

const routes: Routes = [{   //primeiro passo
  path: '',
  component: HomePrincipalComponent
},{
  path: 'chevrolet',
  component: VeiculosChevroletComponent
},{
  path: 'audi',
  component: VeiculosAudiComponent
},{
  path: 'fiat',
  component: VeiculosFiatComponent
},{
  path: 'nissan',
  component: VeiculosNissanComponent
},{
  path: 'bmw',
  component: VeiculosBmwComponent
}, {
  path: 'honda',
  component: VeiculosHondaComponent
},{
  path: 'toyota',
  component: VeiculosToyotaComponent
},{
  path: 'mercedes-benz',
  component: VeiculosMercedesBenzComponent
},{
  path: 'volkswagen',
  component: VeiculosVolkswagemComponent
},{
  path: 'hyundai',
  component: VeiculosHyundaiComponent
}];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
