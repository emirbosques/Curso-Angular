import { Component } from '@angular/core';


@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
})


export class BodyComponent {  

  mostrar = true;
  lista : Array<any> = [
    'IronMan', 'Thor', 'Black Panter', 'Groot'
  ];

 mensaje = {
      texto : 'Super Power Dude',
      autor: ' Ben Parker'
    };
  
 
 

}