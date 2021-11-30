import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';
import * as Parser from 'rss-parser';

import { RssService } from '../rss.service';

import example from './example'

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
    it('should throw on non-rss feed', async () => {
      await expect(rssService.proxyUrl('https://example.com')).rejects.toThrow('Feed not recognized as RSS 1 or 2.')
    });

    it('should replace rss feed urls', async () => {
      const parser = new Parser();
      rssService.parser = {
        parseString: parser.parseString,
        parseURL: async () => Promise.resolve(parser.parseString(example)),
      }
      expect(await rssService.proxyUrl('https://example.com')).toMatchSnapshot();
    });
  });
});
