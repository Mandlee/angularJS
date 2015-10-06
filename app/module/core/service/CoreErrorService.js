'use strict';

coreModule.factory('ErrorService', function ($q) {

    var defer = $q.defer();

    return ({
        request: request,
        requestError: requestError,
        response: response,
        responseError: responseError
    });

    // Intercept the request configuration.
    function request(config) {
        return config || $q.when(config);
    }

    // Intercept the failed request.
    function requestError(rejection) {
        return $q.reject(rejection);
    }

    // Intercept the successful response.
    function response(response) {
        return response || $q.when(response);
    }

    // Intercept the failed response.
    function responseError(response) {

        /**
         * General error
         */
        if (response.status == 401) {

        }

        /**
         * APIKEY error
         * It should be logout the user
         */
        if (response.status == 402) {
        }

        /**
         * Token error
         * It should be logout the user
         */
        if (response.status == 403) {
            // Cancel all request

        }

        /**
         * Not found
         */
        if (response.status == 404) {
            console.log('404', response);

            // url-ként akár szétválogathatod, de nézz bele a response.config-ba, hátha látni valami használhatót.
            if (response.config.url == "/someUrl") {
                response.data = [];

                // Ez a kulcs ezzel tudsz neki hazudni, hogy ez jó response a 404 not found helyett
                defer.resolve(response.data);
                return defer.promise;
            }
        }

        // Minden egyéb esetben az error ágon jön vissza
        return $q.reject(response);

    }
});