require('dotenv').config();
const {config} = require('./kobiton_configure.conf');

config.specs = [
  './test/specs/**/findShifts.e2e.js'
]

config.capabilities = [{
  sessionName:        'Android app test',
  sessionDescription: 'This is an example for Android app',
  deviceOrientation:  'portrait',
  captureScreenshots: true,
  automationName:     'UiAutomator2',
  app:                process.env.KOBITON_ANDROID_APP_ID,
  deviceGroup:        'KOBITON',
  deviceName:         process.env.KOBITON_ANDROID_DEVICE,
  platformVersion:    '9',
  platformName:       'Android',
  autoGrantPermissions: true
}]

exports.config = config
