import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { DefinitionOfTheProjectObtainPublisher } from './publisher/definition-of-the-project-obtained-publishe';
import { ProjectDescriptionEditedPublisher } from './publisher/project-description-edited-publisher';
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
    DefinitionOfTheProjectObtainPublisher,
    ProjectDescriptionEditedPublisher,
  ],
  exports: [
    RegistedDefinitionOfTheProjectPublisher,
    ProjectObtainedPublisher,
    DefinitionOfTheProjectObtainPublisher,
    ProjectDescriptionEditedPublisher,
  ],
})
export class MessagingModule {}
