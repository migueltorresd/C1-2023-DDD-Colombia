import { Module } from '@nestjs/common';
import { RequerimientController } from './requerimient.controller';

@Module({
  imports: [],
  controllers: [RequerimientController],
  providers: [],
  exports: [],
})
export class RequirementAndFuncionalitiesModule {}
