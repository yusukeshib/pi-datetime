# @yusukeshib/pi-datetime

A [pi](https://github.com/badlogic/pi-mono) extension that stamps the **local
time** into the main buffer so you can tell when things happened while
scrolling back:

- after each user prompt
- at the end of each tool execution (with the tool name)
- at the end of each agent response

![screenshot](https://raw.githubusercontent.com/yusukeshib/pi-datetime/main/screenshot.png)

Timestamps are shown via `ctx.ui.notify` — **UI-only**, they never enter the
model context.

## Install

```sh
pi install npm:@yusukeshib/pi-datetime
# or from git
pi install git:github.com/yusukeshib/pi-datetime
```

## License

MIT
