import { HttpInterceptorFn } from '@angular/common/http';
import { ToastService } from '../services/toast.service';
import {inject} from '@angular/core';
import { catchError, EMPTY } from 'rxjs';

export const errorInterceptor: HttpInterceptorFn = (req, next) => {
  const toastService = inject(ToastService);
  return next(req).pipe(catchError((error)=> {
    toastService.showError(error.message);
    return EMPTY;
  }));
};
