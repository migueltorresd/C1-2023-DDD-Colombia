import { Module } from '@nestjs/common/decorators';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOrmPostgresConfigService } from './configs/type-orm-postgres-config.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmPostgresConfigService,
    }),
  ],
  controllers: [],
  providers: [TypeOrmPostgresConfigService],
})
export class PostgreSQLModule {}
