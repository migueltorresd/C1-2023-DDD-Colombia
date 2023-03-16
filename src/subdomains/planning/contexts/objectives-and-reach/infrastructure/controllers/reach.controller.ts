import { Body, Controller, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ReachPostgresEntity } from '../persistence/databases/postgres/entities/reach-postgres.entity';
import { ReachPostgresService } from '../persistence/databases/postgres/services/reach-postgres.service';

@Controller('reach')
export class ReachController {
  constructor(
    private readonly configService: ConfigService,
    private readonly reachService: ReachPostgresService,
  ) {}

  @Post('create')
  createReach(
    @Body() reach: ReachPostgresEntity,
  ): Promise<ReachPostgresEntity> {
    return this.reachService.createReach(
      reach.definitionId,
      reach.definition,
      reach.prioritize,
      reach.stateDefinition,
    );
  }

  @Post('edit-definition')
  editDefinition(
    @Body() reach: ReachPostgresEntity,
  ): Promise<ReachPostgresEntity> {
    return this.reachService.editDefinition(
      reach.definitionId,
      reach.definition,
    );
  }
  @Post('edit-prioritize')
  editPrioritize(
    @Body() reach: ReachPostgresEntity,
  ): Promise<ReachPostgresEntity> {
    return this.reachService.editPrioritize(
      reach.definitionId,
      reach.prioritize,
    );
  }
  @Post('edit-state-definition')
  editStateDefinition(
    @Body() reach: ReachPostgresEntity,
  ): Promise<ReachPostgresEntity> {
    return this.reachService.editStateDefinition(
      reach.definitionId,
      reach.stateDefinition,
    );
  }
}
