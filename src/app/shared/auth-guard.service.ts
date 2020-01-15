import { Injectable } from '@angular/core';
import { Router, CanActivate, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import decode from 'jwt-decode';

@Injectable()
export class AuthGuardService implements CanActivate {
    constructor(public router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        let token= sessionStorage.getItem("Token");
        if (typeof(token) == undefined || token ==null){
            this.router.navigate([''])
            return false;
        }
        else{
            const tokenPayload = decode(token);
            // if tokenPayload.Email
            return true;
        }
        
    }
    // private allowURL(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    //     const roles = parseInt(localStorage.getItem('roles'), 10);
    //     let allow = false;
    //     switch (roles) {
    //         case 1: {
    //             // Legal
    //             if (state.url !== '/Information' && state.url !== '/sectionOneInformation'
    //                 && state.url !== '/sectionOnePreparer') {
    //                 allow = true;
    //             }
    //             break;
    //         }
    //         case 2: {
    //             // Employer
    //             if (state.url !== '/Information' && state.url !== '/sectionOneInformation'
    //                 && state.url !== '/sectionOnePreparer') {
    //                 allow = true;
    //             }
    //             break;
    //         }
    //         case 3: {
    //             // Employee
    //             if (state.url !== '/sectionTwoEmployerConfirmation' && state.url !== '/sectionTwoEmployerReview'
    //                 && state.url !== '/sectionTwoEmployerSummary' && state.url !== '/sectionThreeRehireUpload'
    //                 && state.url !== 'sectionThreeConfirmation' && state.url !== 'sectionThreeReview' &&
    //                 state.url !== '/sectionTwoEmployerSearch') {
    //                 allow = true;
    //             }
    //             break;
    //         }
    //         case 4: {
    //             //  HR
    //             if (state.url !== '/Information' && state.url !== '/sectionOneInformation'
    //                 && state.url !== '/sectionOnePreparer') {
    //                 allow = true;
    //             }
    //             break;
    //         }
    //         case 5: {
    //             // Preparer
    //             if (state.url === '/sectionOnePreparer' && (state.url.localeCompare('/dashboard'))) {
    //                 allow = true;
    //             }
    //         }
    //     }
    //     return allow;
    // }
    // private login(): boolean {
    //     const isloggedIn = (localStorage.getItem('login') === '1' ? true : false);
    //     return isloggedIn;
    // }
    // private logout() {
    //     localStorage.removeItem('login');
    // }
}
