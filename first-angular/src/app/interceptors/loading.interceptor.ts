import { HttpInterceptorFn } from '@angular/common/http';
import { LoadingService } from '../services/loading.service';
import { inject } from '@angular/core';
import { finalize } from 'rxjs';

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  const loaderService = inject(LoadingService);
  loaderService.show();
  
  return next(req).pipe(
     finalize(() => loaderService.hide()),
  );
};
