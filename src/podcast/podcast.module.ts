import { Module } from '@nestjs/common';
import { PodcastService } from './podcast.service';
import { RssService } from './rss.service';
import {BlockerModule} from '../blocker/blocker.module'


@Module({
  imports: [BlockerModule],
  providers: [PodcastService, RssService],
  exports: [PodcastService],
})
export class PodcastModule {}
