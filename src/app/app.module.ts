import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { RodapeComponent } from './rodape/rodape.component';
import { ListaClienteComponent } from './lista-cliente/lista-cliente.component';
import { ApoliceSeguroComponent } from './apolice-seguro/apolice-seguro.component';
import { FormsModule } from '@angular/forms';
import { MediaCalculatorComponent } from './media-calculator/media-calculator.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    RodapeComponent,
    ListaClienteComponent,
    ApoliceSeguroComponent,
    MediaCalculatorComponent,
    FormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
