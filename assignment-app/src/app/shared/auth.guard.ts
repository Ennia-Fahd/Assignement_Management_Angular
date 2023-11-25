import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);

  let authenticated=authService.isAuthenticated();
  if(authenticated==false){
    router.navigateByUrl("/login");
    return false;
  }else{
    return true;
  }
};