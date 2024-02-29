import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})

export class PrimerDiaComponent {
  @Input() ejemplo:String = 'la variable de hijo soy yo'

  text = {
  
  text1: 'Computadora, computador u ordenador​​​ es una máquina electrónica digital programable que ejecuta una serie de comandos para procesar los datos de entrada, obteniendo convenientemente información que posteriormente se envía a las unidades de salida.',

}

  
  card = {
  
  title: 'bootcamp',
  description: "hola"

  
  

}
}
