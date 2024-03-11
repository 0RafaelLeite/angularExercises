import { Component } from '@angular/core';

@Component({
  selector: 'app-media-calculator',
  templateUrl: './media-calculator.component.html',
  styleUrls: ['./media-calculator.component.css']
})
export class MediaCalculatorComponent {
  ac1!: number;
  ac2!: number;
  ag!: number;
  af!: number;
  media!: number;
  resultado!: string;

  calcularMedia(): void {
    this.media = (this.ac1 * 0.15) + (this.ac2 * 0.30) + (this.ag * 0.10) + (this.af * 0.45);

    this.resultado = this.media >= 5 ? 'Aprovado' : 'Reprovado';
  }
}
