import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('returns the generated create placeholder', () => {
    expect(service.create({})).toBe('This action adds a new user');
  });

  it('returns the generated collection placeholder', () => {
    expect(service.findAll()).toBe('This action returns all user');
  });

  it('includes the requested id in the find-one placeholder', () => {
    expect(service.findOne(42)).toBe('This action returns a #42 user');
  });

  it('includes the requested id in the update placeholder', () => {
    expect(service.update(42, {})).toBe('This action updates a #42 user');
  });

  it('includes the requested id in the remove placeholder', () => {
    expect(service.remove(42)).toBe('This action removes a #42 user');
  });
});
