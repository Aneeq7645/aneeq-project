// import { CanActivateFn } from '@angular/router';

// export const MyGard: CanActivateFn = (route, state) => {
//   return this.sellerService.isSellerLoggedIn;
// };

// import { Injectable } from '@angular/core';
// import {
//   CanActivateFn,
//   ActivatedRouteSnapshot,
//   RouterStateSnapshot,
//   UrlTree,
// } from '@angular/router';
// import { Observable } from 'rxjs';
// import { SellerService } from './services/seller.service';

// @Injectable({
//   providedIn: 'root',
// })
// export class MyGuard implements CanActivateFn {
//   constructor(private sellerService: SellerService) {
//     // Constructor code here
//   }

//   canActivateFn(
//     next: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot
//   ):
//     | Observable<boolean | UrlTree>
//     | Promise<boolean | UrlTree>
//     | boolean
//     | UrlTree {
//     // Guard logic here
//     return this.sellerService.isSellerLoggedIn;
//   }
// }
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateFn,
} from '@angular/router';
import { Observable } from 'rxjs';
import { SellerService } from './services/seller.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard {
  constructor(private sellerService: SellerService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (localStorage.getItem('seller')) {
      return true;
    }
    return this.sellerService.isSellerLoggedIn;
  }
}
