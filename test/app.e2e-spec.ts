import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import * as request from 'supertest';

import { AppModule } from './../src/app.module';


describe('AppController (e2e)', () => {
  let app: INestApplication;
  let config: ConfigService

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    config = moduleFixture.get(ConfigService)

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });

  it('/feed (GET)', () => {
    return request(app.getHttpServer())
      .get('/feed')
      .expect(401)
  });

  it('/feed (GET) authed', () => {
    return request(app.getHttpServer())
      .get('/feed')
      .auth(config.get('HTTP_BASIC_USER'), config.get('HTTP_BASIC_PASS'))
      .expect(200)
  });
});
