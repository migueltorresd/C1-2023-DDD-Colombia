import { Injectable } from '@nestjs/common';
import { IProjectDomainService } from 'src/subdomains/planning/contexts/objectives-and-reach/domain/services/proyect.domain-service';
import { DefinitionOfTheProjectPostgresEntity } from '../entities/definition-of-the-project-postgres.entity';
import { ProjectPostgresEntity } from '../entities/project-postgres.entity';
import { ProjectRepository } from '../repositories/project.reposity';
/**
 * este controlador es el encargado de recibir las peticiones http
 *
 * @export 
 * @class ProjectPostgresService
 * @implements {IProjectDomainService<ProjectPostgresEntity>}
 */
@Injectable()
export class ProjectPostgresService
  implements IProjectDomainService<ProjectPostgresEntity>
{
  constructor(private readonly projectRepository: ProjectRepository) {}
  /**
   * obtiene el proyecto
   *
   * @param {string} projectId // id del proyecto 
   * @param {string} name // nombre del proyecto
   * @param {number} budget // presupuesto del proyecto
   * @param {boolean} stateApprove // estado de aprobacion del proyecto
   * @return {Promise<ProjectPostgresEntity>}
   * @memberof ProjectPostgresService
   */
  createProject(
    projectId: string,
    name: string,
    budget: number,
    stateApprove: boolean,
  ): Promise<ProjectPostgresEntity> {
    return this.projectRepository.create({
      projectId,
      name,
      budget,
      stateApprove,
      definitionOfTheProject: new DefinitionOfTheProjectPostgresEntity(),
    });
  }
  /**
   * edita el nombre del proyecto
   *
   * @param {string} projectId
   * @param {string} name
   * @return {Promise<ProjectPostgresEntity>}
   * @memberof ProjectPostgresService
   */
  editName(projectId: string, name: string): Promise<ProjectPostgresEntity> {
    const data = new ProjectPostgresEntity();
    data.name = name;
    return this.projectRepository.update(projectId, data);
  }
  /**
   * edita el presupuesto del proyecto
   *
   * @param {string} projectId
   * @param {number} budget
   * @return {Promise<ProjectPostgresEntity>}
   * @memberof ProjectPostgresService
   */
  editBudget(
    projectId: string,
    budget: number,
  ): Promise<ProjectPostgresEntity> {
    const data = new ProjectPostgresEntity();
    data.budget = budget;
    return this.projectRepository.update(projectId, data);
  }
  /**
   * edita el estado de aprobacion del proyecto
   *
   * @param {string} projectId // id del proyecto
   * @param {boolean} stateApprove // estado de aprobacion del proyecto
   * @return {Promise<ProjectPostgresEntity>} // retorna el proyecto editado
   * @memberof ProjectPostgresService
   */
  editStateApprove(
    projectId: string,
    stateApprove: boolean,
  ): Promise<ProjectPostgresEntity> {
    const data = new ProjectPostgresEntity();
    data.stateApprove = stateApprove;
    return this.projectRepository.update(projectId, data);
  }
  /**
   * obtiene el proyecto por id
   *
   * @param {string} projectId // id del proyecto
   * @return {Promise<ProjectPostgresEntity>} // retorna el proyecto
   * @memberof ProjectPostgresService
   */
  getProjectById(projectId: string): Promise<ProjectPostgresEntity> {
    return this.projectRepository.findOneById(projectId);
  }
}
