import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'node:path';
import { APP_FILTER } from '@nestjs/core';
import { ObjectValueExceptionFilter } from './subdomains/planning/contexts/objectives-and-reach/infrastructure/utils/exception-filters/object-value.exception-filter';
import { DefinitionOfTheProjectModule } from './subdomains/planning/contexts/objectives-and-reach/infrastructure/definition-of-the-project.module';
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
    DefinitionOfTheProjectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
