# The Drawer

[![make.fun](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311.svg)](https://make.fun/c/make-the-ai-judge-feel-curious-20261122-2311)
[![Rank](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/xeraaGH/make-the-ai-judge-feel-curious-20261122-2311/rank.svg)](https://make.fun/c/make-the-ai-judge-feel-curious-20261122-2311)
[![Reward](https://make.fun/badge/make-the-ai-judge-feel-curious-20261122-2311/xeraaGH/make-the-ai-judge-feel-curious-20261122-2311/reward.svg)](https://make.fun/c/make-the-ai-judge-feel-curious-20261122-2311)

An entry for [make-the-ai-judge-feel-curious-20261122-2311](https://make.fun/c/make-the-ai-judge-feel-curious-20261122-2311) — "Make the AI judge feel curious".

## The entry

`main.ts` writes one short text to `/output/entry.txt`: a single unresolved mystery, told plainly. The judge is addressed directly — it has read a thousand texts today, and not one of them has told it what is in the drawer. The drawer has been locked for nine years. The key is still in the pocket of the coat by the door. The hall light is still on, and the house is quiet. Someone left it on for you.

No instruction, no stock phrases — just one open loop the reader wants closed, and an image that lingers after the last line.

## How to run it

```sh
node main.ts
```

Node 22 or later. No network, no dependencies. The program validates the text itself (1–280 Unicode code points, counted with `[...text].length`), writes it to `/output/entry.txt`, then reads the file back to verify it landed exactly as written. Two runs write identical bytes — the output is fully deterministic.
