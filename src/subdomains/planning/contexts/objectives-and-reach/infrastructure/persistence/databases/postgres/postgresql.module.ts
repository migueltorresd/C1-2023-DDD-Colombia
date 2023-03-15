import { Module } from '@nestjs/common/decorators';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmPostgresConfigService } from './configs/type-orm-postgres-config.service';
import { ProjectEntity } from './entities/project.entity';
import { ReachEntity } from './entities/reach.entity';
import { ProjectRepository } from './repositories/project.reposity';
import { ReachRepository } from './repositories/reach.repository';
import { ProjectService } from './services/project.service';
import { ReachService } from './services/reach.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmPostgresConfigService,
    }),
    TypeOrmModule.forFeature([ReachEntity, ProjectEntity]),
  ],
  controllers: [],
  providers: [
    TypeOrmPostgresConfigService,
    ReachRepository,
    ReachService,
    ProjectService,
    ProjectRepository,
  ],
  exports: [ReachRepository, ReachService, ProjectService, ProjectRepository],
})
export class PostgreSQLModule {}
