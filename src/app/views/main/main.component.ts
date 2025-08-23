import {Component, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {Observable, Subscription} from "rxjs";
import {OpenPopupInMainPagesService} from "../../shared/services/open-popup-in-main-pages.service";


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnDestroy {
  openPopup: boolean = false;
  popupEvent: Subscription;

  constructor(private router: Router,
              private openPopupService: OpenPopupInMainPagesService) {
    this.popupEvent = new Observable((observer) => {
      if (this.openPopupService.openPopup) {
        setTimeout(() => {
          observer.next(this.openPopup = true);
          this.openPopupService.openPopup = false;
        }, 10000);
      }
    })
      .subscribe();
  }

  ngOnDestroy() {
    this.popupEvent.unsubscribe();
    this.openPopupService.openPopup = false;
  }

  openCatalog() {
    this.openPopup = false;
    this.router.navigate(['/catalog']);
  }

  closePopup(ev: Event) {
    if ((ev.target as HTMLElement).classList.contains('popup-bg') || (ev.target as HTMLElement).classList.contains('popup-close')) {
      this.openPopup = false;
    }
  }

  protected readonly HTMLElement = HTMLElement;
}
