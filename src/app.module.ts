import { Module } from '@nestjs/common';
import { DefinitionProjectIdValueObject } from './subdomains/planning/contexts/objectives-and-reach/domain/value-objects/Definition-the-project/definition-project-id/definition-project-id.value-object';
import { DefinitionValueObject } from './subdomains/planning/contexts/objectives-and-reach/domain/value-objects/reach/definition/definition.value-object';

@Module({
  imports: [],
  controllers: [],
  providers: [DefinitionValueObject, DefinitionProjectIdValueObject],
})
export class AppModule {}
