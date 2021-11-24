import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';

import { RssService } from './rss.service';

describe('RssService', () => {
  let rssService: RssService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({isGlobal: true})],
      controllers: [],
      providers: [RssService],
    }).compile();

    rssService = app.get<RssService>(RssService);
  });

  describe('root', () => {
    it('should return "Hello World!"', async () => {
      expect(await rssService.proxyUrl('https://example.com')).toBe('Hello World!')
    });
  });
});
