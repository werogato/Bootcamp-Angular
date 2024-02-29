import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Console, log } from 'console';

@Component({
  selector: 'app-segundo-dia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './segundo-dia.component.html',
  styleUrl: './segundo-dia.component.scss'
})

export class SegundoDiaComponent {
  
  constructor(){}

  miFormulario= new FormGroup ({
    
    username: new FormControl('', Validators.required),
    userpassword: new FormControl('',Validators.required)

  });

  cambio(event:any){
    event.preventDefault()
  }


  variable = ''
  btn_class= ''


  user = [

    {
        name :'luis',
        descripcion : 'Description 1'
    },
    {
        name :'gerando',
        descripcion : 'Description 2'
    },
    {
        name :'armando',
        descripcion : 'Description 3'
    },
    {
        name :'wero',
        descripcion : 'Description 4'
    },
    {
        name :'panfilo',
        descripcion : 'Description 5'
    },

    


  ]


  ngOnInit(){
    console.log("se inicio");

  }

  ngDoCheck(): void {
    console.log("se ejecuto el docheck");
    
  }

  clickButton(text:string){
    this.variable = text
  }
  ngOnDestroy() {
    console.log("se ejecuto el ondestroy")
  }
}
