// jwt-auth.guard.ts
import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AuthorizationGuard implements CanActivate {
  constructor(
    @Inject('SUPABASE_CLIENT') private readonly supabase: SupabaseClient,
    // Injecting a service for database queries
  ) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    // Extract JWT from the cookie
    const token = request.cookies['CSIM_ACCESS_TOKEN'];

    if (!token) {
      throw new UnauthorizedException('No Authorization token found!');
    }

    // Verify the JWT
    const userData = await this.supabase.auth.getUser(token);

    if (userData?.data && userData.error === null) {
      request.user = userData.data.user;
      return true;
    } else {
      return false;
    }
  }
}
