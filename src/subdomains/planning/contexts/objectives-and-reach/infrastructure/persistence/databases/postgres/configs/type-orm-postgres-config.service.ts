import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';

/**
 * esta clase es la que se encarga de configurar la conexión a la base de datos
 *
 * @export
 * @class TypeOrmPostgresConfigService
 * @implements {TypeOrmOptionsFactory} // esta interfaz es la que se encarga de crear las opciones de conexión a la base de datos
 */
@Injectable()
export class TypeOrmPostgresConfigService implements TypeOrmOptionsFactory {
  constructor(private readonly configService: ConfigService) {}

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: this.configService.get<string>('DB_HOST'),
      port: this.configService.get<number>('DB_PORT'),
      username: this.configService.get<string>('DB_USER'),
      password: this.configService.get<string>('DB_PASSWORD'),
      database: this.configService.get<string>('DB_NAME'),
      entities: [__dirname + '/../**/*.entity{.ts,.js}'],
      synchronize: true,
      logging: true,
    };
  }
}
