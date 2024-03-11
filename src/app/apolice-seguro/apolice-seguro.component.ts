import { Component } from '@angular/core';

@Component({
  selector: 'app-apolice-seguro',
  templateUrl: './apolice-seguro.component.html',
  styleUrls: ['./apolice-seguro.component.css']
})
export class ApoliceSeguroComponent {

  nomeSegurado!: string;
  sexo!: string;
  idade!: number;
  valorAutomovel!: number;
  valorApolice!: number;

  constructor() { }

  calcularApolice() {
    console.log(this.nomeSegurado, " - ", this.sexo, " - ", this.idade)
    if (this.sexo == 'masculino') {
      if (this.idade <= 25) {
        this.valorApolice = this.valorAutomovel * 0.15;
      } else {
        this.valorApolice = this.valorAutomovel * 0.10;
      }
    } else if (this.sexo == 'feminino') {
      this.valorApolice = this.valorAutomovel * 0.08;
    }
    console.log('Valor do Apolice:', this.valorApolice);
  }
}
