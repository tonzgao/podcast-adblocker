import { Module } from '@nestjs/common';
import { BlockerService } from './blocker.service';

@Module({
  imports: [],
  providers: [BlockerService],
  exports: [BlockerService],
})
export class BlockerModule {}
