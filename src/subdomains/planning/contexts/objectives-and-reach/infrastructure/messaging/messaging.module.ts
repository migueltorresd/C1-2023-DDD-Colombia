import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { ProjectObtainedObtainedPublisher } from './publisher/definition-of-the-project-obtained-publishe';
import { ProjectObtainedPublisher } from './publisher/project-obtained-publisher';
import { RegistedDefinitionOfTheProjectPublisher } from './publisher/registed-definition-of-the-project.publisher';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'DEFINICION_DE_PROYECTO',
        transport: Transport.KAFKA,
        options: {
          client: {
            //  clientId: 'definicio-de-proyecto',
            brokers: ['localhost:9092'],
          },
        },
      },
    ]),
  ],
  controllers: [],
  providers: [
    RegistedDefinitionOfTheProjectPublisher,
    ProjectObtainedPublisher,
    ProjectObtainedObtainedPublisher,
  ],
  exports: [
    RegistedDefinitionOfTheProjectPublisher,
    ProjectObtainedPublisher,
    ProjectObtainedObtainedPublisher,
  ],
})
export class MessagingModule {}
