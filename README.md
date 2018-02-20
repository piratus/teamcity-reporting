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

$ tcsm blockOpened 'block-name' 'Optional description'
##teamcity[blockOpened name='block-name' description='Optional description']

$ tcsm blockClosed 'block-name'
##teamcity[blockClosed name='block-name']

$ tcsm compilationStarted 'compiler'
##teamcity[compilationStarted compiler='compiler']

$ tcsm compilationFinished 'compiler'
##teamcity[compilationFinished compiler='compiler']
```
