import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './core/db/db.module';
import { SupabaseModule } from './core/supabase/supabase.module';
import { AuthModule } from './modules/v1/auth/auth.module';
import { HealthModule } from './modules/v1/health/health.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, // Makes ConfigModule available across all modules
      envFilePath: ['.env', '.env.local'],
    }),
    DatabaseModule,
    HealthModule,
    AuthModule,
    SupabaseModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
