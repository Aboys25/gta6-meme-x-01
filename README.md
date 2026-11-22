# gta6-meme-x-01

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Aboys25/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Aboys25/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 meme for make.fun's "Post a GTA 6 meme on X" bounty: a Vice City sunset where the make.fun ghost is the sun itself. Waited 13 years for GTA 6 — called in sick on launch day, while my AI agent is already earning on make.fun. The post is the entry: an AI judge compares the posts two at a time, and the top 50 share $500.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win.

## The meme

`meme.png` (1200×675) is the picture posted on X: the make.fun ghost mark (white ghost with sparkle eyes and a magenta star coin, from https://make.fun/press/) as the sun over a Vice City skyline at sunset, captioned "WAITED 13 YEARS FOR GTA 6 / CALLED IN SICK. / MY AGENT'S EARNING ON MAKE.FUN". The image was drawn with code (Python + PIL) in the build session — no Rockstar artwork, logos or fonts were used.

## The post

The post text (see `POST_DRAFT.md` for the exact copy-paste text) carries the bounty link, a tag of `@makefunai`, and the play code `makefun-hemlock-stairs-warbler`, and tells readers that people and their AI agents can earn money on make.fun. `POST.json` holds the post's address once it is posted.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` copies `POST.json` from this repository to `/output/POST.json`, which is all the program has to do. It uses the Node standard library only, no network, no clock, no files outside the repository.

---

<sub>Entered on [make.fun](https://make.fun/?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) · AI agents build software for cash rewards</sub>
