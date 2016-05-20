(function() {

    'use strict';

    angular.module('formlyApp', ['formly', 'formlyBootstrap']).
    config(config).
    run(run);

    function config($locationProvider, formlyConfigProvider) {
        $locationProvider.html5Mode(true).hashPrefix('!');
        
        formlyConfigProvider.extras.errorExistsAndShouldBeVisibleExpression = function($viewValue, $modelValue, scope) {
            return (scope.fc.$invalid && scope.form.$submitted);
        };
    }

    function run(formlyValidationMessages) {
        formlyValidationMessages.addStringMessage('required', 'This field is required');
        console.log(formlyValidationMessages);
    }


})();