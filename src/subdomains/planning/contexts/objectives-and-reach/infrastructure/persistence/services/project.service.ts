import { Injectable } from '@nestjs/common/decorators/core/injectable.decorator';
import { ProjectPostgresService } from '../databases/postgres/services/project-postgres.service';
/**
 * este controlador es el encargado de recibir las peticiones http
 *
 * @export
 * @class ProjectService
 * @extends {ProjectPostgresService}
 */
@Injectable()
export class ProjectService extends ProjectPostgresService {}
