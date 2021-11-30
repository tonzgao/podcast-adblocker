import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {map} from 'lodash'

import * as Parser from 'rss-parser';
import * as xmljs from 'xml-js'

@Injectable()
export class RssService {
  parser: Parser;

  constructor(private configService: ConfigService) {
    this.parser = new Parser();
  }

  public async proxyUrl(url: string) {
    const feed = await this.parseUrl(url);
    const domain = this.configService.get('HOSTNAME')
    const items = map(feed.items, item => {
      if (!item?.enclosure?.url) {
        return item;
      }
      return {
        ...item,
        enclosure: {
          ...item.enclosure,
          url: `${domain}/download/${item.enclosure.url}`
        }
      }
    })
    const result = {
      ...feed,
      items
    }
    return xmljs.js2xml(result, {compact: true, spaces: 4})
  }

  private async parseUrl(url: string) {
    // TODO: validate url
    // TODO: support authed urls
    const result = await this.parser.parseURL(url);
    console.log('Subscribed', url)
    return result;
  }
}
