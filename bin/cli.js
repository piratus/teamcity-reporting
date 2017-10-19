#!/usr/bin/env node
const { message, blockOpened, blockClosed, compilationFinished, compilationStarted } = require('../dist/messages')

function cleanupArgs({ _, version, help, $0, ...args }) {
  return args;
}

const argv = require('yargs')
  .command({
    command: 'message <text>',
    aliases: ['msg'],
    describe: 'A simple message',
    builder(yargs) {
      return yargs
        .option('status', {
          describe: 'Message status',
          choices: ['ERROR', 'WARNING'],
        })
    },
    handler({text, ...args}) {
      console.log(message(text, cleanupArgs(args)))
    },
  })
  .command({
    command: 'blockOpened <name> [description]',
    describe: 'Open a message block',
    builder(yargs) {},
    handler({name, description, ...args}) {
      console.log(blockOpened(name, description, cleanupArgs(args)))
    },
  })
  .command({
    command: 'blockClosed <name>',
    describe: 'Close a message block',
    builder(yargs) {},
    handler({name, ...args}) {
      console.log(blockClosed(name, cleanupArgs(args)))
    },
  })
  .command({
    command: 'compilationStarted <compiler>',
    describe: 'Start compilation',
    builder(yargs) {},
    handler({compiler, ...args}) {
      console.log(compilationStarted(compiler, cleanupArgs(args)))
    },
  })
  .command({
    command: 'compilationFinished <compiler>',
    describe: 'Finish compilation',
    builder(yargs) {},
    handler({compiler, ...args}) {
      console.log(compilationFinished(compiler, cleanupArgs(args)))
    },
  })
  .demandCommand(1)
  .help()
  .wrap(72)
  .argv
