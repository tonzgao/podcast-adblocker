import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { AppController } from './controller/app.controller';
import { PodcastModule } from './podcast/podcast.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal: true}), AuthModule, PodcastModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
