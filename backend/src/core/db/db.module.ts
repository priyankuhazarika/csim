import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DbProvider } from './db.providers';
import databaseConfig from './db.config';

@Module({
  imports: [
    ConfigModule.forFeature(databaseConfig), // Import database config
  ],
  providers: [DbProvider],
  exports: [DbProvider], // Export Drizzle connection for use in other modules
})
export class DatabaseModule {}
