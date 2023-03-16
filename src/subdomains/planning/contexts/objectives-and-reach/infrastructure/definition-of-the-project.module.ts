import { Module } from '@nestjs/common';
import { APP_FILTER } from '@nestjs/core';
import { DefinitionOfTheProjectController } from './controllers/definition-of-the-project.controller';
import { MessagingModule } from './messaging/messaging.module';
import { PersistenceModule } from './persistence/persistence.module';
import { ObjectValueExceptionFilter } from './utils/exception-filters/object-value.exception-filter';

@Module({
  imports: [PersistenceModule, MessagingModule],
  controllers: [DefinitionOfTheProjectController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: ObjectValueExceptionFilter,
    },
  ],
  exports: [],
})
export class DefinitionOfTheProjectModule {}
