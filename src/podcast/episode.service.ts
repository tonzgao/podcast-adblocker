import * as fs from 'fs';
import * as wget from 'node-wget-promise';
import { Injectable, StreamableFile } from '@nestjs/common';

const getFileName = (url: string) => {
  const file = url.split('/').slice(-1)[0];
  return file;
};

const getFileLocation = (filename: string) => {
  return `/tmp/${filename}`;
};

@Injectable()
export class EpisodeService {
  public async handle(url: string, res) {
    const filename = getFileName(url);
    const fileLocation = getFileLocation(filename);
    if (!fs.existsSync(fileLocation)) {
      await this.download(url, fileLocation);
      await this.adblock(fileLocation);
    }
    return this.serve(fileLocation, res);
  }

  private async download(url: string, output: string) {
    await wget(url, { output });
  }

  private async adblock(filename: string) {
    // TODO: queue adblock job
  }

  private async serve(filename: string, res: any) {
    // TODO: only serve via nginx
    const file = fs.createReadStream(filename);
    res.set({
      'Content-Type': 'audio/mpeg', // TODO: is this guaranteed to be correct?
    });
    return new StreamableFile(file);
  }
}
