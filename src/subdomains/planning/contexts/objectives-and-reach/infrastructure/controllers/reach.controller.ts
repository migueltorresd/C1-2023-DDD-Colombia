import { Body, Controller, Post } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ReachEntity } from '../persistence/databases/postgres/entities/reach.entity';
import { ReachService } from '../persistence/databases/postgres/services/reach.service';

@Controller('reach')
export class ReachController {
  constructor(
    private readonly configService: ConfigService,
    private readonly reachService: ReachService,
  ) {}

  @Post('create')
  createReach(@Body() reach: ReachEntity): Promise<ReachEntity> {
    return this.reachService.createReach(
      reach.definitionId,
      reach.definition,
      reach.prioritize,
      reach.stateDefinition,
    );
  }

  @Post('edit-definition')
  editDefinition(@Body() reach: ReachEntity): Promise<ReachEntity> {
    return this.reachService.editDefinition(
      reach.definitionId,
      reach.definition,
    );
  }
  @Post('edit-prioritize')
  editPrioritize(@Body() reach: ReachEntity): Promise<ReachEntity> {
    return this.reachService.editPrioritize(
      reach.definitionId,
      reach.prioritize,
    );
  }
  @Post('edit-state-definition')
  editStateDefinition(@Body() reach: ReachEntity): Promise<ReachEntity> {
    return this.reachService.editStateDefinition(
      reach.definitionId,
      reach.stateDefinition,
    );
  }
}
