import { Injectable } from '@nestjs/common';
import { ReachPostgresService } from '../databases/postgres/services/reach-postgres.service';
/**
 * este controlador es el encargado de recibir las peticiones http
 *
 * @export
 * @class ReachService
 * @extends {ReachPostgresService}
 */
@Injectable()
export class ReachService extends ReachPostgresService {}
