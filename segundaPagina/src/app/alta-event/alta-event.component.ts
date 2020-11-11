import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alta-event',
  templateUrl: './alta-event.component.html',
  styleUrls: ['./alta-event.component.css']
})
export class AltaEventComponent implements OnInit {


  listEvent : String[]=[];

  AltaEmail:String;
  // AltaLoca:String;
  // AltaCiudad:String


  constructor(
    // AltaEmail:String,
    // AltaLoca:String,
    // AltaCiudad:String,

    

  ) { 
    //this.AltaEventComponent=new AltaEventComponent();
  }

  ngOnInit(): void {
  }
  addEvento(newEvent){
    this.listEvent.push(newEvent.value);
    // this.AltaEmail.push(AltaEmail.value);
    
    return false;
  }


  eliminarEvento(listEvent){
    for(let i=0 ; i< this.listEvent.length; i++){
      if(listEvent== this.listEvent[i]){
        this.listEvent.splice (i,1)

      }
    }
  }
}

    
