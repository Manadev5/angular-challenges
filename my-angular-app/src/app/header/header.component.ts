import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CreateDonkeyComponent } from '../create-donkey/create-donkey.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterOutlet, RouterLink, HomeComponent, CreateDonkeyComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
