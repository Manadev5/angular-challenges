import { Injectable } from '@angular/core';
import { Donkey } from '../models/doneky';

@Injectable({
  providedIn: 'root'
})
export class DonkeyService {
  oneDonkey : object | undefined;
  donkeyList: Donkey [] = [
    {
      name: 'DonkeySmart',
      origin:'English',
      birthdate: '2/08/2005',
      image : 'https://live.donkey.school/wp-content/uploads/2021/11/TYPESCRIPT.png'
    },
    {
      name: 'DonkeyNinja',
      origin:'china',
      birthdate: '2/06/2001',
      image : 'https://live.donkey.school/wp-content/uploads/2021/08/HTML-CSS-300x300.png'
    },
    {
      name: 'DonkeyScience',
      origin:'Spanish',
      birthdate: '2/07/2003',
      image : 'https://live.donkey.school/wp-content/uploads/2021/09/PSEUDO-CODE-300x300.png'
    },
    {
      name: 'DonkeyExplorer',
      origin:'Italian',
      birthdate: '2/09/2004',
      image : 'https://live.donkey.school/wp-content/uploads/2021/09/BDD-300x300.png'
    }
  ]

  userDonkeys: Donkey[] = [
    {
      name: 'DonkeySmart',
      origin:'English',
      birthdate: '2/08/2005',
      image : 'https://live.donkey.school/wp-content/uploads/2021/08/stevenson.jpeg'
    }

  ]

  getDonkeyList(){
    return this.donkeyList
  }



  addDonkey(donkey: Donkey){
    return this.donkeyList.push(donkey)
  }

  adoptDonkey(donkey: Donkey){
    const index = this.donkeyList.indexOf(donkey);
    this.donkeyList.splice(index, 1);
    this.userDonkeys.push(donkey);
    console.log(this.userDonkeys)

  }

  getUserDonkeys(){
    return this.userDonkeys
  }

  constructor() { }
}
