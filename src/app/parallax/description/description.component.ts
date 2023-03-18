import { Component } from '@angular/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent {

  title: string = "Seja bem-vindo!"
  description: string = `Olá! Somos um restaurante de comida indiana e italiana. Prezamos bastante pela
  sustentabilidade, então sempre damos prioridades a produtos frescos e orgânicos.`

}
