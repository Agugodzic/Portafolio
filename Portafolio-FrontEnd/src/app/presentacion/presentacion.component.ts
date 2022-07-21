import { Component, OnInit } from '@angular/core';
import { NonNullableFormBuilder } from '@angular/forms';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-presentacion',
  templateUrl: './presentacion.component.html',
  styleUrls: ['./presentacion.component.css']
})
export class PresentacionComponent implements OnInit {

  constructor(private datos:DatosService) { }

  bannerLink="";
  nombre = this.datos.nombre;

  redes = {
    facebook:"https://www.facebook.com/agugodzic/",
    instagram:"https://www.instagram.com/agugodzic/",
    linkedin:"https://www.linkedin.com/in/agust%C3%ADn-godzic-109b09188/",
    github:"https://github.com/Agugodzic"}

  ngOnInit(): void {
  }

}
