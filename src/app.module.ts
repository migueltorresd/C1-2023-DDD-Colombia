import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'node:path';
import { PostgreSQLModule } from './subdomains/planning/contexts/objectives-and-reach/infrastructure/persistence/databases/postgres/postgresql.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: join(
        process.cwd(),
        'environments',
        `.env.${process.env.SCOPE?.trimEnd()}`,
      ),
      // envFilePath: '../environments/.env.dev',
    }),
    PostgreSQLModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
