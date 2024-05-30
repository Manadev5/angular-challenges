import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';

export const routes: Routes = [
  {path: 'home', component: MenuComponent },
  {path: 'signup', component: SignUpComponent },
  {path: 'user', component: UserProfileComponent }
];
