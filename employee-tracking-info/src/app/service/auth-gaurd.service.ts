import { Injectable } from '@angular/core';
import { CanActivate ,ActivatedRouteSnapshot,RouterStateSnapshot, Router} from '@angular/router';
import { EmployeeServiceService } from './employee-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate {
  constructor(private empService:EmployeeServiceService,private router:Router) {

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      if(this.empService.isUserLoggedIn()){
        return true;
      }
      this.router.navigate(["/login"]);
      return false;
  }


}
