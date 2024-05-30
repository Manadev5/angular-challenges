import { Component } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { SignUpComponent } from '../sign-up/sign-up.component';
import { Router, RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [UserProfileComponent, SignUpComponent, RouterOutlet, RouterLink],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

}
