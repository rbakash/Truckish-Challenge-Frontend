import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import decode from 'jwt-decode';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let token = sessionStorage.getItem("Token");
        if (typeof (token) == undefined || token == null) {
            this.router.navigate([''])
            return false;
        }
        else {
            return true;
        }

    }
}
