import { Controller, Get } from '@nestjs/common';


import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Get('/feed')
  posts() {
    // TODO: according to args, return the exact same feed, but with a different link in enclosures
    // The link should be lazy - on get request, download and run through the adblocker (and cache) before returning

    return [
      {
        title: "Post One",
        authorName: "Sirwan",
        content: "This is a sample content",
        categories: ["JS", "React"],
        url: "",
        lastUpdatedTime: new Date(),
        publishDate: new Date(),
      },
    ];
  }
}