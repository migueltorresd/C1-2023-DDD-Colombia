/**
 * Esta interface representa el comando de creación de un proyecto
 * @export
 * @interface ICreateProjecCommand
 */
export interface ICreateProjecCommand {
  definitionId: string;
  dateStar: Date;
  dateEnd: Date;
  state: boolean;
  description: string;
  project: {
    projectId: string;
    name: string;
    budget: number;
    stateApprove: boolean;
  }[];
  reach: {
    reachId: string;
    definition: string;
    prioritize: string;
    stateDefinition: boolean;
  }[];
}
