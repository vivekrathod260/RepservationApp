import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {
  reservations : Reservation[] = [];

  constructor()
  {
    let r = localStorage.getItem("reservations");
    this.reservations = r ? JSON.parse(r) : [];
  }

  addReservation(newone : Reservation)
  {
    this.reservations.push(newone);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  getReservation(id : string) : Reservation | undefined
  {
    return this.reservations.find(r => r.id == id);
  }

  getReservations() : Reservation[]
  {
    return this.reservations;
  }

  updateReservation(updatedR : Reservation)
  {
    let i : number = this.reservations.findIndex(r => r.id == updatedR.id)
    this.reservations[i] = updatedR;
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

  deleteReservation(id: string)
  {
    let i : number = this.reservations.findIndex(r => r.id == id)
    this.reservations.splice(i, 1);
    localStorage.setItem("reservations", JSON.stringify(this.reservations));
  }

}
