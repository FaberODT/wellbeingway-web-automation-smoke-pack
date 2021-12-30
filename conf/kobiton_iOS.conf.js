require('dotenv').config();
const {config} = require('./kobiton_configure.conf')

config.specs = [
  './test/specs/**/all.e2e.js'
]

config.capabilities = [{
  sessionName:          'iOS app test',
  sessionDescription:   'This is an example for iOS app',
  deviceOrientation:    'portrait',
  captureScreenshots:   true,
  app:                  process.env.KOBITON_iOS_APP_ID,
  deviceGroup:          'KOBITON',
  deviceName:           process.env.KOBITON_iOS_DEVICE,
  platformName:         'iOS',
  autoAcceptAlerts:     true
}]

exports.config = config
