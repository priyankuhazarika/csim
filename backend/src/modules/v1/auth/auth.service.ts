import { Inject, Injectable } from '@nestjs/common';
import { SupabaseClient } from '@supabase/supabase-js';

@Injectable()
export class AuthService {
  constructor(
    @Inject('SUPABASE_CLIENT') private readonly supabase: SupabaseClient,
  ) {}

  async createNewUser(email: string, password: string) {
    return this.supabase.auth.signUp({
      email,
      password,
    });
  }

  async loginUser(email: string, password: string) {
    return this.supabase.auth.signInWithPassword({
      email,
      password,
    });
  }
}
