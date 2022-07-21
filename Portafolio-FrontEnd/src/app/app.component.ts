import { Component } from '@angular/core';
import { DatosService } from './datos.service';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private datos:DatosService,private rutas:AppRoutingModule){
  };
  title = 'Portafolio-FrontEnd';

}
