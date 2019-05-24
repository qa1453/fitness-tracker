import {
   Component,
   OnInit,
   OnDestroy,
   EventEmitter,
   Output
} from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
   selector: 'app-header',
   templateUrl: './header.component.html',
   styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {

   @Output() sidenavToggle = new EventEmitter<void>();
   isAuth = false;
   authSubscription: Subscription;

   constructor(private authService: AuthService) {

   }

   ngOnInit() {
      this.authSubscription = this.authService.authChange.subscribe(authStatus => {
         this.isAuth = authStatus;
      });
   }

   onToggleSideNav() {
      this.sidenavToggle.emit();
   }

   ngOnDestroy() {
      this.authSubscription.unsubscribe();
   }
}
