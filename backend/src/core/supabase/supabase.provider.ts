import { createClient } from '@supabase/supabase-js';
import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const SupabaseProvider: Provider = {
  provide: 'SUPABASE_CLIENT',
  useFactory: async (configService: ConfigService) => {
    const publicAnnonKey = configService.get<string>('supabase_client.anonKey');
    const projectUrl = configService.get<string>('supabase_client.projectUrl');

    return createClient(projectUrl, publicAnnonKey);
  },
  inject: [ConfigService],
};
