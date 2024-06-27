import { Component, OnInit } from '@angular/core';
import { RouterLink, Router} from '@angular/router';
import { FormBuilder, FormGroup, Validator, Validators } from '@angular/forms';
import { ReservationService } from '../reservation.service';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.css']
})
export class ReservationFormComponent implements OnInit {

  reservationForm : FormGroup = new FormGroup({});

  constructor(private formBuilder : FormBuilder, private reservationService : ReservationService, private router :Router) {}

  ngOnInit(): void {
      this.reservationForm = this.formBuilder.group({
        checkInDate : ['', Validators.required],
        checkOutDate : ['', Validators.required],
        guestName : ['', Validators.required],
        guestEmail : ['', [Validators.required, Validators.email]],
        roomNumber : ['', Validators.required]
      });
  }
  onSubmit()
  {
    if(this.reservationForm.valid)
    {
      this.reservationService.addReservation(this.reservationForm.value);
      this.router.navigate(['/reservation/list']);
    }
  }
}
