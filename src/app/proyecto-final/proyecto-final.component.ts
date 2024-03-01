import { Component } from '@angular/core';
import { GoogleMap, GoogleMapsModule, MapMarker } from '@angular/google-maps';
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';



@Component({
  selector: 'app-proyecto-final',
  standalone: true,
  imports: [GoogleMapsModule, CommonModule, FormsModule, ReactiveFormsModule, MapMarker, GoogleMap],
  templateUrl: './proyecto-final.component.html',
  styleUrl: './proyecto-final.component.scss'

})
export class ProyectoFinalComponent {

  users: any = []
  position: any ={}

  bandera = false;

  constructor() {

  }
  miFormulario= new FormGroup ({

    
    username: new FormControl('', Validators.required),
    descripcion: new FormControl('',Validators.required),
 
  });

  cambio(event:any){
    event.preventDefault()
  }

  showModal(){
    this.miFormulario.setValue({username:"",descripcion:""})
    this.position=null
  }

  borrar(pos:number) {
    this.users.splice(pos,1);
    localStorage.clear();
    localStorage.setItem('actividades', JSON.stringify(this.miFormulario));
  }

  index= -1

  editartexto(user:any, i:number) {
    console.log(user)
    this.miFormulario.setValue({username:user.username, descripcion:user.descripcion})
    this.position = user.position
    this.index=i
  
  }

  savedata(){
    let obj = {
      ...this.miFormulario.value,
      position:this.position
    }


    if(!this.bandera){
      this.users[this.index]=obj

    }
    else{
      this.users.push(obj);
    }
    


  }
  vertexto(user:any, i:number) {
    console.log(user)
    this.center=user.position
    this.zoom=10
    
  
  }



 

  coordenadas(event:any){
    console.log(event.latLng.lat())
    console.log(event.latLng.lng())
    this.position = {
      lat: event.latLng.lat(),
      lng: event.latLng.lng()
    }
  
    
  
  }
  
  center: google.maps.LatLngLiteral = {lat: 24, lng: 12};
  zoom = 4;



}
