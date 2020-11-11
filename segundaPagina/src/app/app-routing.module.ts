import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AltaEventComponent } from './alta-event/alta-event.component';
import { EventosComponent } from './eventos/eventos.component';
import { ModificarEventComponent } from './modificar-event/modificar-event.component';
import { QuiSomComponent } from './qui-som/qui-som.component';

const routes: Routes = [
  {path: 'modificar-event' , component: ModificarEventComponent} ,
  {path: 'eventos' , component:EventosComponent},
  {path: 'alta-event' , component:AltaEventComponent},
  {path:'qui-som' , component:QuiSomComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
 

})
export class AppRoutingModule { 

}
