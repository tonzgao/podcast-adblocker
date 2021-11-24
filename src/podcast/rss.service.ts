import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

import * as Parser from 'rss-parser';

@Injectable()
export class RssService {
  parser: Parser;

  constructor(private configService: ConfigService) {
    this.parser = new Parser();
  }

  public async proxyUrl(url: string) {
    // const feed = await this.parseUrl(url);
    const domain = this.configService.get('HOSTNAME')
    // Modify enclosure url to proxied url, then convert back to xml
    return 'Hello World!';
  }

  private async parseUrl(url: string) {
    // TODO: validate url
    console.log('Subscribed', url)
    return this.parser.parseURL(url);
  }
}
