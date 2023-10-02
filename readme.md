# Fuck Twitch Ads

Ads are annoying, we just want to watch the stream, otherwise we would watch TV. So this extension creates a workaround such that you don't need an actual adblocker so twitch can't complain and still makes money without annoying us.
Not paying for Chrome extensions, so you just have to download it here.

## Description

Detects if an Ad starts, proceeds to mute this Ad and search for the player by player and unmute the real stream. Once the ads end unmute the main stream again. Not every ad will have a player by player stream alongside, then it will just mute the ads. For example entry ads never contains a player by player stream. Additionally it might fail sometimes to properly unmute and mute both parties, however it will never cause the stream to break nor will it mute the wrong feed. 

### Potential features

- Switch the feeds so the big one is still the intresting one
- Reduce ad quality to save some data (I guess)
- Enable for firefox

## Getting Started

This is at your own risk, never install/download something you don't trust, so feel free to go over the code itself to verify. That being said it is only 1 file, that basicly just check some divs and mute/unmute some video html tags. 

### Download files

For those that don't know for sure how to download, click on the green button `code` and select `Download ZIP`.

### Chrome & Opera (chromium)

- Download the code (as above)
- Unzip in a directory of your choice
- Go to `chrome://extensions/` (or `opera://extensions/`)
- Enable developer mode in top right
- Now the option `Load unpacked` becomes available on the left side, click it
- Select the unzipped directory in you file structure

### Firefox

TODO

## Version History

* 0.1
    * Initial Release
    * Tested quickly on Chrome
