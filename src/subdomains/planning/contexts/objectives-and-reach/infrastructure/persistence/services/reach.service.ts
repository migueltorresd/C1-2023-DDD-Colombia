import { Injectable } from '@nestjs/common';
import { ReachPostgresService } from '../databases/postgres/services/reach-postgres.service';
@Injectable()
export class ReachService extends ReachPostgresService {}
