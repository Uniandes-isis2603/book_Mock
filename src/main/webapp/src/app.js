(function (ng) {

    var app = angular.module('mainApp', [
        // External dependencies
        'ui.router',
        'ui.bootstrap',
        // Internal modules dependencies
        'authorModule',
        'editorialModule',
        'reviewModule',
        'bookModule',
        'datePickerModule'
    ]);
    app.directive('datePicker', [function () {
        return {
            scope: {
                model: '='
            },
            restrict: 'E',
            templateUrl: 'src/datepicker.tpl.html',
            controller: 'datePickerCtrl'
        };
    }]);
    

})(window.angular);



