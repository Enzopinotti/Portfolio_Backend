import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';

describe('ProjectsController', () => {
  let controller: ProjectsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectsController],
      providers: [ProjectsService],
    }).compile();

    controller = module.get<ProjectsController>(ProjectsController);
  });

  it('delegates create to the scaffold service', () => {
    expect(controller.create({})).toBe('This action adds a new project');
  });

  it('delegates collection reads to the scaffold service', () => {
    expect(controller.findAll()).toBe('This action returns all projects');
  });

  it('coerces the route id for find-one', () => {
    const result = controller.findOne('42');

    expect(result).toBe('This action returns a #42 project');
  });

  it('coerces the route id for update', () => {
    const result = controller.update('42', {});

    expect(result).toBe('This action updates a #42 project');
  });

  it('coerces the route id for removal', () => {
    const result = controller.remove('42');

    expect(result).toBe('This action removes a #42 project');
  });
});
