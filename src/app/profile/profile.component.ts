import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { ProfileHostDirective } from './profile-host.directive';
import { Subject } from 'rxjs';
import { takeUntil, mergeMap } from 'rxjs/operators';
import { ProfileService } from './profile.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit, OnDestroy {

  @ViewChild(ProfileHostDirective, { static: true }) profileHost: ProfileHostDirective;
  private destroySubject = new Subject();

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    const viewContainerRef = this.profileHost.viewContainerRef;

    this.profileService.isLoggedIn$.pipe(
      takeUntil(this.destroySubject),
      mergeMap(isLoggedIn =>
        this.profileService.loadComponent(viewContainerRef, isLoggedIn)
      )
    ).subscribe();

  }

  ngOnDestroy() {
    this.destroySubject.next();
    this.destroySubject.complete();
  };

}
