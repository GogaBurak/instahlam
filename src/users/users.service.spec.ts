import { Test, TestingModule } from '@nestjs/testing';
import { getRepositoryToken } from '@nestjs/typeorm';
import { FeedEntity } from '../db/entities/feed.entity';
import { UserEntity } from '../db/entities/user.entity';
import { UsersService } from './users.service';

describe('UsersService', () => {
  let userService: UsersService;
  let mockUser = {
    id: 9,
    email: "jp@gv.com",
    password: "123456t",
    nickname: "chlpt"
  }
  let mockFeed = {
    id: 1,
    user: {
      id: 9,
      email: "jp@gv.com",
      password: "123456t",
      nickname: "chlpt"
    },
    feedPosts: []
  }


  beforeEach(async () => {

    const UsersRepository = {
      findOne: jest.fn().mockResolvedValue(mockUser),
      save: jest.fn().mockResolvedValue(mockUser),
      create: jest.fn().mockResolvedValue(mockUser)
    };
    const FeedsRepository = {
      findOne: jest.fn().mockResolvedValue(mockFeed),
      save: jest.fn().mockResolvedValue(mockFeed),
      create: jest.fn().mockResolvedValue(mockFeed)
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          useValue: UsersRepository, 
          provide: getRepositoryToken(UserEntity)
        }, 
        {
          useValue: FeedsRepository, 
          provide: getRepositoryToken(FeedEntity)
        }, 
      ],
    }).compile();

    userService = module.get<UsersService>(UsersService);
  });

  afterEach(async () => {
    jest.resetAllMocks();
  });

  it('should be defined', () => {
    expect(userService).toBeDefined();
  });
});
