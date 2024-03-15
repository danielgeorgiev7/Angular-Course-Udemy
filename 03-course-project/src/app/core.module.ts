import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { LoggingService } from './logging.service';

// Not really needed here, useful if there are services that are not provided in the root for leaner app module
@NgModule({
  declarations: [],
  imports: [],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
    },
    // ? Not important for application. Just a demo for understanding services
    // providers: [LoggingService], // ? Same effect as providing in root
  ],
})
export class CoreModule {}
