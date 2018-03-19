import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  activarModoContrasena = true;
  nombre="Fernando";
  nombre2= "fernando alberto heRRera Jimenez";
  arreglo=[1,2,3,4,5,6,7,8,9,10];
  PI= Math.PI;
  a:number=0.234451;
  salario=1234.5;
  fecha=new Date();

  heroe={
    nombre:"logan",
    clave:"wolverine",
    edad:500,
    direccion:{
      calle:"primera",
      casa:"4"
    }
  };

  valorDePromesa= new Promise ((resolve, reject) => {
    setTimeout(()=> resolve('Llego la data'), 3500);
  })

  video="ynZYVxrQL7o";

}
