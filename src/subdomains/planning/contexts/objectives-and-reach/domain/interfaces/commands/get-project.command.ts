/**
 * Esta interface representa el comando de obtención de un proyecto
 *
 * @export
 * @interface IGetProjectCommand // esta interface representa el comando de obtención de un proyecto
 */
export interface IGetProjectCommand {
  projectId: string;
  name: string;
  budget: number;
  stateApprove: boolean;
}
