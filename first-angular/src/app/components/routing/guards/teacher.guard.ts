import { CanActivateFn } from '@angular/router';
import { UserinfoService } from '../service/userinfo.service';
import { inject } from  '@angular/core';

export const teacherGuard: CanActivateFn = (route, state) => {
  let userinfoService = inject(UserinfoService);

  if(userinfoService.userRole === 'teacher'){
    return true;
  } else {
    alert('Sorry Boss !! You dont have access to this page');
    return false;
  }
};
