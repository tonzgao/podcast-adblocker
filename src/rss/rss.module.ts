import { Module } from '@nestjs/common';
import { RssService } from './rss.service';

@Module({
  imports: [],
  providers: [RssService],
  exports: [RssService],
})
export class RssModule {}
