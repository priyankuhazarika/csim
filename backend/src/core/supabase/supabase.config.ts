import { registerAs } from '@nestjs/config';

export default registerAs('supabase_client', () => ({
  anonKey: process.env.SUPABASE_ANON_KEY,
  projectUrl: process.env.SUPABASE_PROJECT_URL,
}));
