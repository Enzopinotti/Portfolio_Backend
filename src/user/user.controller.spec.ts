import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('delegates create to the scaffold service', () => {
    expect(controller.create({})).toBe('This action adds a new user');
  });

  it('delegates collection reads to the scaffold service', () => {
    expect(controller.findAll()).toBe('This action returns all user');
  });

  it('coerces the route id for find-one', () => {
    expect(controller.findOne('42')).toBe('This action returns a #42 user');
  });

  it('coerces the route id for update', () => {
    expect(controller.update('42', {})).toBe('This action updates a #42 user');
  });

  it('coerces the route id for removal', () => {
    expect(controller.remove('42')).toBe('This action removes a #42 user');
  });
});
