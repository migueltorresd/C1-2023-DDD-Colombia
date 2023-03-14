import { Module } from '@nestjs/common';
import { DefinitionOfTheProjectAggregate } from './subdomains/planning/contexts/objectives-and-reach/domain/aggregates/definition-of-the-project';

@Module({
  imports: [],
  controllers: [],
  providers: [DefinitionOfTheProjectAggregate],
})
export class AppModule {}
