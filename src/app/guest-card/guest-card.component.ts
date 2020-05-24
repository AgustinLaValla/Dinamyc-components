import { Component } from '@angular/core';
import { ProfileService } from '../profile/profile.service';

@Component({
  selector: 'app-guest-card',
  templateUrl: './guest-card.component.html',
  styles: []
})
export class GuestCardComponent {

  constructor(private profileService: ProfileService) { }

  login(): void {
    this.profileService.login();
  };

};
