import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { DefinitionOfTheProjectPostgresService } from '../databases/postgres/services/definition-of-the-project-postgres.service';
@Injectable()
export class DefinitionOfTheProjectService extends DefinitionOfTheProjectPostgresService {}
