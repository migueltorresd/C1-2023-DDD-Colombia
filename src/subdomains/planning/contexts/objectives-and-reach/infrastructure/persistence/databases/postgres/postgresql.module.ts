import { Module } from '@nestjs/common/decorators';
import { APP_FILTER } from '@nestjs/core';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DefinitionOfTheProjectController } from '../../../controllers/definition-of-the-project.controller';
import { RegistedDefinitionOfTheProjectPublisher } from '../../../messaging/publisher/registed-definition-of-the-project.publisher';
import { ObjectValueExceptionFilter } from '../../../utils/exception-filters/object-value.exception-filter';
import { DefinitionOfTheProjectService } from '../../services/definition-of-the-project.service';
import { TypeOrmPostgresConfigService } from './configs/type-orm-postgres-config.service';
import { ProjectPostgresEntity } from './entities/project-postgres.entity';
import { ReachPostgresEntity } from './entities/reach-postgres.entity';
import { ProjectRepository } from './repositories/project.reposity';
import { ReachPostgresRepository } from './repositories/reach.repository';
import { ProjectPostgresService } from './services/project-postgres.service';
import { ReachPostgresService } from './services/reach-postgres.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DEFINICION_DE_PROYECTO',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'definicio-de-proyecto',
            brokers: ['localhost:9092'],
          },
        },
      },
    ]),
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmPostgresConfigService,
    }),
    TypeOrmModule.forFeature([ReachPostgresEntity, ProjectPostgresEntity]),
  ],
  controllers: [DefinitionOfTheProjectController],
  providers: [
    TypeOrmPostgresConfigService,
    ReachPostgresRepository,
    ReachPostgresService,
    ProjectPostgresService,
    ProjectRepository,
    RegistedDefinitionOfTheProjectPublisher,
    DefinitionOfTheProjectService,
  ],
  exports: [
    ReachPostgresRepository,
    ReachPostgresService,
    ProjectPostgresService,
    ProjectRepository,
    DefinitionOfTheProjectService,
  ],
})
export class PostgreSQLModule {}
