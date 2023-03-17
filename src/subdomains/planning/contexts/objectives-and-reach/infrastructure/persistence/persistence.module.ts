import { Module } from '@nestjs/common';
import { PostgreSQLModule } from './databases/postgres/postgresql.module';
import { DefinitionOfTheProjectService } from './services/definition-of-the-project.service';
import { ProjectService } from './services/project.service';
import { ReachService } from './services/reach.service';

@Module({
  imports: [PostgreSQLModule],
  controllers: [],
  providers: [DefinitionOfTheProjectService, ReachService, ProjectService],
  exports: [DefinitionOfTheProjectService, ReachService, ProjectService],
})
export class PersistenceModule {}
