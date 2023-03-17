// import { IEditProjectDescriptionCommand } from '../../../domain/interfaces/commands/edit-project-description.command';
// import { IEditProjectDescriptionResponse } from '../../../domain/interfaces/responses/edit-project-description.response';
// import { IDefinitionOfTheProjectDomainService } from '../../../domain/services/definition-of-the-project.domain-service';
// import { ProjectDescriptionEditedEventPublisher } from '../../../domain/events/publishers/definition-of-the-project/project-description-edited.event-publisher';

// describe('ProjectDescriptionEditUseCase', () => {
//   // Arrange
//   const definitionoftheprojectService: IDefinitionOfTheProjectDomainService = {
//     // Implementación simulada del servicio
//     async editDescripcionProject() {
//       return null;
//     },
//   };

//   const projectDescriptionEditedEventPublisher: ProjectDescriptionEditedEventPublisher =
//     {
//       // Implementación simulada del publicador de eventos
//       publish() {
//         return Promise.resolve(null);
//       },
//     };

//   const useCase = new ProjectDescriptionEditUseCase(
//     definitionoftheprojectService,
//     projectDescriptionEditedEventPublisher,
//   );

//   const command: IEditProjectDescriptionCommand = {
//     definitionId: '1',
//     description: 'Nueva descripción',
//   };

//   // Act
//   let response: IEditProjectDescriptionResponse;

//   beforeEach(async () => {
//     response = await useCase.execute(command);
//   });

//   // Assert
//   test('should edit the project description successfully', async () => {
//     expect(response.success).toBeTruthy();
//     expect(response.data).toBeNull();
//   });
// });
