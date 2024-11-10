import { Inject, Injectable } from '@nestjs/common';
import { SupabaseClient, User } from '@supabase/supabase-js';
import { eq } from 'drizzle-orm';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import { organizations } from 'src/core/db/schemas/schema';

@Injectable()
export class OrgsService {
  constructor(
    @Inject('SUPABASE_CLIENT') private readonly supabase: SupabaseClient,
    @Inject('DRIZZLE_CONNECTION') private readonly db: NodePgDatabase,
  ) {}

  async getOrgs(user: User) {
    return this.db
      .select()
      .from(organizations)
      .where(eq(organizations.created_by, user.id));
  }
}
