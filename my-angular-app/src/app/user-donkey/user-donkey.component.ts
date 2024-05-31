import { Component, OnInit } from '@angular/core';
import { DonkeyService } from '../service/donkey.service';
import { Donkey } from '../models/doneky';

@Component({
  selector: 'app-user-donkey',
  standalone: true,
  imports: [],
  providers: [DonkeyService],
  templateUrl: './user-donkey.component.html',
  styleUrl: './user-donkey.component.css'
})
export class UserDonkeyComponent implements OnInit {
  userDonkeys : Array<any> | undefined;

  constructor(private donkeyService: DonkeyService){}

 ngOnInit() {
   this.userDonkeys = this.donkeyService.getUserDonkeys();
   console.log(this.userDonkeys)
 }

 



}
