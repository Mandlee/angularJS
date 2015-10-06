/**
 * Created by aramiszrobert on 10/1/15.
 */
coreModule.filter('html', function ($sce) {
    return $sce.trustAsHtml;
});