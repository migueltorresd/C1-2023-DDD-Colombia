import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { ProjectPostgresService } from '../databases/postgres/services/project-postgres.service';
@Injectable()
export class ProjectService extends ProjectPostgresService {}
