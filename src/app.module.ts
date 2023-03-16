import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'node:path';
import { ProjectController } from './subdomains/planning/contexts/objectives-and-reach/infrastructure/persistence/databases/postgres/Project.controller';
import { ReachController } from './subdomains/planning/contexts/objectives-and-reach/infrastructure/persistence/databases/postgres/reach.controller';
import { PostgreSQLModule } from './subdomains/planning/contexts/objectives-and-reach/infrastructure/persistence/databases/postgres/postgresql.module';
import { APP_FILTER } from '@nestjs/core';
import { ObjectValueExceptionFilter } from './subdomains/planning/contexts/objectives-and-reach/infrastructure/utils/exception-filters/object-value.exception-filter';
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
  controllers: [ReachController, ProjectController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ObjectValueExceptionFilter,
    },
  ],
})
export class AppModule {}
