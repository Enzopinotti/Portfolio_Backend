import { Test, TestingModule } from '@nestjs/testing';
import { ProjectsService } from './projects.service';

describe('ProjectsService', () => {
  let service: ProjectsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectsService],
    }).compile();

    service = module.get<ProjectsService>(ProjectsService);
  });

  it('returns the generated create placeholder', () => {
    expect(service.create({})).toBe('This action adds a new project');
  });

  it('returns the generated collection placeholder', () => {
    expect(service.findAll()).toBe('This action returns all projects');
  });

  it('includes the requested id in the find-one placeholder', () => {
    expect(service.findOne(42)).toBe('This action returns a #42 project');
  });

  it('includes the requested id in the update placeholder', () => {
    expect(service.update(42, {})).toBe('This action updates a #42 project');
  });

  it('includes the requested id in the remove placeholder', () => {
    expect(service.remove(42)).toBe('This action removes a #42 project');
  });
});
