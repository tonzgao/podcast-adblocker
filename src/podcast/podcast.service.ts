import { Injectable } from '@nestjs/common';

import {RssService} from './rss.service'

@Injectable()
export class PodcastService {
  constructor(private rssService: RssService) {}

  public async handle(url: string) {
    // TODO: if domain is same as configService.get('HOSTNAME'), return adblocked asset
    return this.rssService.proxyUrl(url);
  }
}
