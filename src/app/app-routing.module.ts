import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path:'', loadChildren: ()=> import('./home/home.module').then(m => m.HomeModule), pathMatch: 'full'},
  { path: 'reservation', loadChildren: ()=> import('./reservation/reservation.module').then(m => m.ReservationModule)},
  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
