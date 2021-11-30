import { Module } from '@nestjs/common';
import { PodcastService } from './podcast.service';
import { RssService } from './rss.service';
import {BlockerModule} from '../blocker/blocker.module'
import { EpisodeService } from './episode.service';


@Module({
  imports: [BlockerModule],
  providers: [PodcastService, RssService, EpisodeService],
  exports: [PodcastService],
})
export class PodcastModule {}
