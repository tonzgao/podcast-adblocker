# podcast-adblocker

Note: does not work. Radioadblock is archived and all models are deleted. Even if they weren't its possible that it wouldn't work anyways - it seems to take a per radio classification approach, whereas for podcasts something like a measure of how "unusual" a particular segment is would probably work better.

For now, I'll just implement this conceptually and if I get around to playing around with ML I might try to make it myself.

## The plan
1. Setup rss client using something like https://www.npmjs.com/package/rss-parser - works
2. See if https://github.com/adblockradio/adblockradio works off the shelf - does not work
3. Reserve using something like https://www.npmjs.com/package/rss-generator or just vanilla https://www.npmjs.com/package/xml-js library - done
4. Add endpoints/frontend to proxy feeds - done
5. Add endpoints to serve and cache adblocked files - done
6. Add cronjob to delete old files
7. Add db for "subscribed" feeds and cronjob to prefetch new episodes
7. Add basic auth - done

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Using the app
```bash
$ curl -u user:pass localhost:3000/feed/https://feeds.npr.org/510289/podcast.xml
$ curl -u user:pass localhost:3000/download/https://file-examples-com.github.io/uploads/2017/11/file_example_MP3_700KB.mp3
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```


## License

[MIT licensed](LICENSE).
