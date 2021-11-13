# podcast-adblocker server

radioadblock backend

`docker build . -t adblock-server`
`docker run --rm -it --entrypoint bash adblock-server`

Note: This does not actually work - the models are all empty

```
[2021-11-13T17:18:27.721Z] info pred-hotlist:   /adblockradio/model/Finland_Basso Radio/hotlist.sqlite db found
[2021-11-13T17:18:27.728Z] error pred-hotlist:  Finland_Basso Radio unknown error: Error: SQLITE_ERROR: no such table: M.tracks
```