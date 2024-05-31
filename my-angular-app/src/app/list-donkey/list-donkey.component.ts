import { Component, OnInit } from '@angular/core';
import { DonkeyService } from '../service/donkey.service';
import { Donkey } from '../models/doneky';

@Component({
  selector: 'app-list-donkey',
  standalone: true,
  imports: [],
  providers:[DonkeyService],
  templateUrl: './list-donkey.component.html',
  styleUrl: './list-donkey.component.css'
})
export class ListDonkeyComponent implements OnInit {
donkeyList: Array<any> | undefined;
oneDonkey : Donkey | null = null;
showDetails : Boolean | null = null;

constructor(private donkeyService : DonkeyService){}

ngOnInit(): void {
  this.donkeyList = this.donkeyService.getDonkeyList()
}

adoptDonkey(donkey: Donkey){
  this.donkeyService.adoptDonkey(donkey)
 }

 mouseEnter(donkey : Donkey){
   this.oneDonkey = donkey;


 }

 mouseLeave(){
  this.oneDonkey = null;
 }


}
