#!/usr/bin/env node
const { message, blockOpened, blockClosed} = require('../dist/messages')

const argv = require('yargs')
  .command({
    command: 'message <text>',
    aliases: ['msg'],
    desc: 'A simple message',
    builder(yargs) {
      return yargs
        .option('status', {
          describe: 'Message status',
          choices: ['ERROR', 'WARNING'],
        })
    },
    handler({text, _, version, help, $0, ...args}) {
      console.log(message(text, args))
    },
  })
  .command({
    command: 'blockOpened <name> [description]',
    desc: 'Open a message block',
    builder(yargs) {},
    handler({name, description, _, version, help, $0, ...args}) {
      console.log(blockOpened(name, description, args))
    },
  })
  .command({
    command: 'blockClosed <name>',
    desc: 'Close a message block',
    builder(yargs) {},
    handler({name, _, version, help, $0, ...args}) {
      console.log(blockClosed(name, args))
    },
  })
  .demandCommand()
  .help()
  .wrap(72)
  .argv
