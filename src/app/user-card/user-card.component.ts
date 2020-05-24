import { Component } from '@angular/core';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styles: []
})
export class UserCardComponent {

  constructor(private profileService:ProfileService) { }

  logout() { 
    this.profileService.logout();
  };

};
