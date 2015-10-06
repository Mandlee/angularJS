var host = window.location.hostname;
var environment = 'development';

switch (host) {
    case 'dev-server.localhost' :
        environment = 'development';
        break;
    case 'staging-server.com' :
        environment = 'staging';
        break;
    case 'production-server.com' :
        environment = 'production';
        break;
    default :
        break;
}

var isDevelopment = (environment === 'development');
var isStaging = (environment === 'staging');
var isProduction = (environment === 'production');

var runConfig = {};

if (isDevelopment) {
    runConfig = {
        WS_URL: 'http://dev-server.localhost/server/ws/',
        DEBUG: {
            enable: true
        }
    }
}

if (isStaging) {
    runConfig = {
        WS_URL: 'http://staging-server.com/server/ws/',
        DEBUG: {
            enable: true
        }
    }
}

if (isProduction) {
    runConfig = {
        WS_URL: 'http://production-server.com/server/ws/',
        DEBUG: {
            enable: false
        }
    }
}