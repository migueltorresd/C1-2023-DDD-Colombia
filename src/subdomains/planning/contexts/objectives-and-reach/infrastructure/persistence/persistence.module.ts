import { Module } from '@nestjs/common';
import { PostgreSQLModule } from './databases/postgres/postgresql.module';
import { ProjectPostgresService } from './databases/postgres/services/project-postgres.service';
import { DefinitionOfTheProjectService } from './services/definition-of-the-project.service';
import { ReachService } from './services/reach.service';

@Module({
  imports: [PostgreSQLModule],
  controllers: [],
  providers: [
    DefinitionOfTheProjectService,
    ProjectPostgresService,
    ReachService,
  ],
  exports: [
    DefinitionOfTheProjectService,
    ProjectPostgresService,
    ReachService,
  ],
})
export class PersistenceModule {}
