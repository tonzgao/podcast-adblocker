import { Injectable } from '@nestjs/common';

@Injectable()
export class EpisodeService {
  public async handle(url: string) {
    // Check if file is already downloaded and adblocked
    // Otherwise, download and adblock
  }

  private async download(url: string) {

  }

  private async adblock(file: Buffer) {

  }

  private async serve(filename: string) {

  }
}
