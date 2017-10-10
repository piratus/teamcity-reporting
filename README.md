# TeamCity reporting helpers

A set of helper functions and a CLI script for better TeamCity build integration

## Installation

```bash
npm install teamcity-reporting
```

## Usage

### Javascript

```javascript
import { message } from 'teamcity-reporting'

message('Message text')
```

### CLI command

```bash
$ tcsm message "Message text"
##teamcity[message text='Message text']

$ tcsm groupOpened 'group-name'
##temamcity[groupOpened name='group-name']

$ tcsm groupClosed 'group-name'
##temamcity[groupClosed name='group-name']
```
