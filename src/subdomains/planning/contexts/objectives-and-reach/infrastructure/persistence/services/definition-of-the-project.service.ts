import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { DefinitionOfTheProjectPostgresService } from '../databases/postgres/services/definition-of-the-project-postgres.service';
/**
 * este controlador es el encargado de recibir las peticiones http
 *
 * @export
 * @class DefinitionOfTheProjectService
 * @extends {DefinitionOfTheProjectPostgresService}
 */
@Injectable()
export class DefinitionOfTheProjectService extends DefinitionOfTheProjectPostgresService {}
