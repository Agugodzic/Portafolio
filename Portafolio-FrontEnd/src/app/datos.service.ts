import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  constructor() {}
  habilidades:String[] = [];
  edad:number = 25;
  sobreMi:String = "";
  estudios = [{}];
  proyectos = [{}];
  nombre:String = "Agustin Godzic";
}
