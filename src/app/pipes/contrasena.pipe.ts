import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena'
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: string, activar: boolean=true): any {
    let re = /./gi;
    if(activar)  value = value.replace(re,"*")
    return value;
  }
}
