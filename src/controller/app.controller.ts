import { Param, Controller, Get, Response, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { PodcastService } from '../podcast/podcast.service';

@Controller()
export class AppController {
  constructor(private podcastService: PodcastService) {}

  // Unescaped urls in path seem to throw 404 regardless of middleware or interceptors
  // For now, we will route inside the controller. Later we can use nginx to rewrite the url if required
  @Get('*')
  @UseGuards(AuthGuard('basic'))
  async root(
    @Param() params: { '0': string },
    @Response({ passthrough: true }) res: Response,
  ) {
    const result = await this.podcastService.handle(params['0'], res);
    return result;
  }
}
