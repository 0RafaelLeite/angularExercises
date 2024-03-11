import { Component } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css'
})
export class FormularioComponent {
  sexo: string = '';
  idade: number | null = null;
  valorAutomovel: number | null = null;
  valorApolice: number = 0;

  constructor() { }

  valorDaApolice() {
    if (this.sexo == 'Masculino' && this.idade != null && this.idade <= 25){
      this.valorApolice = 0.15 * (this.valorAutomovel ?? 0);
    } else if (this.sexo == 'Masculino' && this.idade != null && this.idade > 25) {
      this.valorApolice = 0.1 * (this.valorAutomovel ?? 0);
    } else {
      this.valorApolice = 0.08 * (this.valorAutomovel ?? 0);
    }
  }

  limparValorZero(event: number | null) {
    if (event === 0) {
      event = null;
    }
  }
}
