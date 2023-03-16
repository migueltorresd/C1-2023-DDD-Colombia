import { Module } from '@nestjs/common/decorators';
import { APP_FILTER } from '@nestjs/core';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefinitionOfTheProjectController } from '../../../controllers/definition-of-the-project.controller';
import { RegistedDefinitionOfTheProjectPublisher } from '../../../messaging/publisher/registed-definition-of-the-project.publisher';
import { ObjectValueExceptionFilter } from '../../../utils/exception-filters/object-value.exception-filter';
import { DefinitionOfTheProjectEntity } from '../../entities/definition-of-the-project.entity';
import { DefinitionOfTheProjectService } from '../../services/definition-of-the-project.service';
import { ProjectService } from '../../services/project.service';
import { TypeOrmPostgresConfigService } from './configs/type-orm-postgres-config.service';
import { DefinitionOfTheProjectPostgresEntity } from './entities/definition-of-the-project-postgres.entity';
import { ProjectPostgresEntity } from './entities/project-postgres.entity';
import { ReachPostgresEntity } from './entities/reach-postgres.entity';
import { DefinitionOfTheProjectRepository } from './repositories/definition-of-the-project.repository';
import { ProjectRepository } from './repositories/project.reposity';
import { ReachPostgresRepository } from './repositories/reach.repository';
import { DefinitionOfTheProjectPostgresService } from './services/definition-of-the-project-postgres.service';
import { ProjectPostgresService } from './services/project-postgres.service';
import { ReachPostgresService } from './services/reach-postgres.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmPostgresConfigService,
    }),
    TypeOrmModule.forFeature([
      ReachPostgresEntity,
      ProjectPostgresEntity,
      DefinitionOfTheProjectPostgresEntity,
    ]),
  ],
  controllers: [],
  providers: [
    TypeOrmPostgresConfigService,
    ReachPostgresService,
    ProjectPostgresService,

    DefinitionOfTheProjectPostgresService,
    ProjectRepository,
    ReachPostgresRepository,
    DefinitionOfTheProjectRepository,
  ],
  exports: [
    ReachPostgresService,
    ProjectPostgresService,

    DefinitionOfTheProjectPostgresService,
    ProjectRepository,
    ReachPostgresRepository,
    DefinitionOfTheProjectRepository,
  ],
})
export class PostgreSQLModule {}
