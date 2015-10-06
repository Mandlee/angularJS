/**
 * Created by aramiszrobert on 10/1/15.
 */
var appConfig = {};

appConfig = angular.extend(appConfig, runConfig);
appConfig = angular.extend(appConfig, globalConfig);

console.log('appConfig', appConfig);