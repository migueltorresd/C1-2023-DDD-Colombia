import { Module } from '@nestjs/common/decorators';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmPostgresConfigService } from './configs/type-orm-postgres-config.service';
import { ProjectPostgresEntity } from './entities/project-postgres.entity';
import { ReachPostgresEntity } from './entities/reach-postgres.entity';
import { ProjectRepository } from './repositories/project.reposity';
import { ReachPostgresRepository } from './repositories/reach.repository';
import { ProjectPostgresService } from './services/project-postgres.service';
import { ReachPostgresService } from './services/reach-postgres.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmPostgresConfigService,
    }),
    TypeOrmModule.forFeature([ReachPostgresEntity, ProjectPostgresEntity]),
  ],
  controllers: [],
  providers: [
    TypeOrmPostgresConfigService,
    ReachPostgresRepository,
    ReachPostgresService,
    ProjectPostgresService,
    ProjectRepository,
  ],
  exports: [
    ReachPostgresRepository,
    ReachPostgresService,
    ProjectPostgresService,
    ProjectRepository,
  ],
})
export class PostgreSQLModule {}
