import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World!';
  }

  @Get('/feed')
  @UseGuards(AuthGuard('basic'))
  posts() {
    // TODO: according to args, return the exact same feed, but with a different link in enclosures
    // The link should be lazy - on get request, download and run through the adblocker (and cache) before returning

    return [
      {
        title: 'Post One',
        authorName: 'Sirwan',
        content: 'This is a sample content',
        categories: ['JS', 'React'],
        url: '',
        lastUpdatedTime: new Date(),
        publishDate: new Date(),
      },
    ];
  }
}
