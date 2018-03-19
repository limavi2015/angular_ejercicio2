# estudioAngular_ejercicio2
Practicando Pipes
Pipes sirven para transformar la data en el template de forma visual (en documentación angular puedes buscar como funcionan todos)
Currency
date
uppercase
json
limitTo
lowercase
async
decimal
percent


archivo: capitalizados.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalizado'
})

export class CapitalizadoPipe implements PipeTransform {
  transform(value: string, todas:boolean=true): string {
      value = value.toLowerCase();
      let nombres = value.split(" ");
      if(todas){
        for(let i in nombres){
          nombres[i] = nombres[i][0].toUpperCase() +  nombres[i].substr(1)
        }
      }else{
          nombres[0] = nombres[0][0].toUpperCase() +  nombres[0].substr(1)
      }
      return nombres.join(" ");
  }
}
