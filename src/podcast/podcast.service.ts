import { Injectable } from '@nestjs/common';

import { RssService } from './rss.service';
import { EpisodeService } from './episode.service';

@Injectable()
export class PodcastService {
  constructor(
    private rssService: RssService,
    private episodeService: EpisodeService,
  ) {}

  public async handle(input: string, res) {
    if (input.startsWith('feed')) {
      return this.rssService.proxyUrl(input.replace('feed/', ''));
    } else if (input.startsWith('download')) {
      return this.episodeService.handle(input.replace('download/', ''), res);
    }
  }
}
