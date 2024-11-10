// interceptors/response.interceptor.ts
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { CommonResponse } from '../core/common/dto/express-response.dto';

@Injectable()
export class ResponseInterceptor<T>
  implements NestInterceptor<T, CommonResponse>
{
  intercept(
    context: ExecutionContext,
    next: CallHandler,
  ): Observable<CommonResponse> {
    return next.handle().pipe(
      map((data) => {
        return {
          ...data,
        };
      }),
    );
  }
}
