import { Test, TestingModule } from '@nestjs/testing';
import { UserRestService } from './user-rest.service';

describe('UserRestService', () => {
  let service: UserRestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserRestService],
    }).compile();

    service = module.get<UserRestService>(UserRestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
