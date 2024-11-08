import { drizzle } from 'drizzle-orm/node-postgres';
import { Provider } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

export const DbProvider: Provider = {
  provide: 'DRIZZLE_CONNECTION',
  useFactory: async (configService: ConfigService) => {
    const databaseUrl = configService.get<string>('database.url');

    return drizzle(databaseUrl);
  },
  inject: [ConfigService],
};
