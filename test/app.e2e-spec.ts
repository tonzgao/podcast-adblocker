import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as request from 'supertest';

import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let config: ConfigService;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    config = moduleFixture.get(ConfigService);

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/feed (GET)', () => {
    return request(app.getHttpServer())
      .get('/feed/https://feeds.npr.org/510289/podcast.xml')
      .expect(401);
  });

  it('/feed (GET) authed', () => {
    return request(app.getHttpServer())
      .get('/feed/https://feeds.npr.org/510289/podcast.xml')
      .auth(config.get('HTTP_BASIC_USER'), config.get('HTTP_BASIC_PASS'))
      .expect(200);
  });

  it('/download (GET)', () => {
    return request(app.getHttpServer())
      .get(
        '/download/https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3',
      )
      .expect(401);
  });

  xit('/feed (GET) authed', () => {
    return request(app.getHttpServer())
      .get(
        '/download/https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3',
      )
      .auth(config.get('HTTP_BASIC_USER'), config.get('HTTP_BASIC_PASS'))
      .expect(200);
  });
});
