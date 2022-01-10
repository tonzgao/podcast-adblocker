import { Injectable } from '@nestjs/common';

import { RssService } from './rss.service';
import { EpisodeService } from './episode.service';

const unescapeNginx = (url: string) => {
  if (url.includes('http://') || url.includes('https://')) {
    return url;
  }
  return url.replace('http:/', 'http://').replace('https:/', 'https://');
}

@Injectable()
export class PodcastService {
  constructor(
    private rssService: RssService,
    private episodeService: EpisodeService,
  ) {}

  public async handle(input: string, res) {
    if (input.startsWith('feed')) {
      return this.rssService.proxyUrl(unescapeNginx(input.replace('feed/', '')));
    } else if (input.startsWith('download')) {
      return this.episodeService.handle(unescapeNginx(input.replace('download/', '')), res);
    }
  }
}
