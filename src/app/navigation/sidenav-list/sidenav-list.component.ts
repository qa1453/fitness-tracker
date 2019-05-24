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
   selector: 'app-sidenav-list',
   templateUrl: './sidenav-list.component.html',
   styleUrls: ['./sidenav-list.component.scss']
})
export class SidenavListComponent implements OnInit, OnDestroy {
   @Output() closeSidenav = new EventEmitter<void>();
   isAuth = false;
   authSubscription: Subscription;

   constructor(private authService: AuthService) { }

   ngOnInit() {
      this.authSubscription = this.authService.authChange.subscribe(authStatus => {
         this.isAuth = authStatus;
      });
   }
   onClose() {
      this.closeSidenav.emit();
   }

   ngOnDestroy() {
      this.authSubscription.unsubscribe();
   }
}
