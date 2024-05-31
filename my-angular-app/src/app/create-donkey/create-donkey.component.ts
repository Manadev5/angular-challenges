import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { DonkeyService } from '../service/donkey.service';
import { Donkey } from '../models/doneky';
@Component({
  selector: 'app-create-donkey',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  providers:[DonkeyService],
  templateUrl: './create-donkey.component.html',
  styleUrl: './create-donkey.component.css'
})
export class CreateDonkeyComponent {
   donkeyForm = new FormGroup ({
    name: new FormControl('', {nonNullable: true, }),
    origin: new FormControl('', {nonNullable: true, }),
    birthdate: new FormControl('', {nonNullable: true, }),
    image: new FormControl('', {nonNullable: true, })
   })



   constructor(public donkeyService: DonkeyService){}

   createDonkey(){
    const donkey : Donkey = this.donkeyForm.getRawValue();
    this.donkeyService.addDonkey(donkey);
   }

  
}
