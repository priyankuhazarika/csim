import { registerAs } from '@nestjs/config';

console.log('process.env.SUPABASE_ANON_KEY', process.env.SUPABASE_ANON_KEY);

export default registerAs('supabase_client', () => {
  console.log('process.env.SUPABASE_ANON_KEY', process.env.SUPABASE_ANON_KEY);
  return {
    anonKey: process.env.SUPABASE_ANON_KEY,
    projectUrl: process.env.SUPABASE_PROJECT_URL,
  };
});
