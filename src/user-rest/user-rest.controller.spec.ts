import { Test, TestingModule } from '@nestjs/testing';
import { UserRestController } from './user-rest.controller';
import { UserRestService } from './user-rest.service';

describe('UserRestController', () => {
  let controller: UserRestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserRestController],
      providers: [UserRestService],
    }).compile();

    controller = module.get<UserRestController>(UserRestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
