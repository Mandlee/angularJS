/**
 * Created by aramiszrobert on 10/1/15.
 */
coreModule.filter('preJson', function($sce) {
    return function(object, spacing) {
        if (angular.isUndefined(spacing)) {
            spacing = 2;
        }
        //return $sce.trustAsHtml('<pre>' + angular.toJson(object, spacing) + '</pre>');
        return $sce.trustAsHtml('<p><br/>alma</p>');
        return $sce.trustAs('html', '<p><br/>alma</p>');
    };
});