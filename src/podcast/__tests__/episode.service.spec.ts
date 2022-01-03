import { Test, TestingModule } from '@nestjs/testing';
import { ConfigModule } from '@nestjs/config';

import { EpisodeService } from '../episode.service';

describe('EpisodeService', () => {
  let episodeService: EpisodeService;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot({ isGlobal: true })],
      controllers: [],
      providers: [EpisodeService],
    }).compile();

    episodeService = app.get<EpisodeService>(EpisodeService);
  });

  xit('should download and serve audio files', async () => {
    expect(
      await episodeService.handle(
        'https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3',
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        { set: () => {} },
      ),
    ).toMatchSnapshot();
  });
});
