import { Injectable } from '@nestjs/common';

import Parser from 'rss-parser';

@Injectable()
export class RssService {
  parser: Parser;

  constructor() {
    this.parser = new Parser();
  }

  public parseUrl(url: string) {
    return this.parser.parseURL(url);
  }
}
