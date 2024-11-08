import { Injectable, Inject } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  constructor(
    @Inject('SUPABASE_CLIENT') private readonly supabase: SupabaseClient,
  ) {}

  async createNewUser(email: string, password: string) {
    const userData = await this.supabase.auth
      .signUp({
        email,
        password,
      })
      .then((response) => response.data);
    return userData;
  }
}
