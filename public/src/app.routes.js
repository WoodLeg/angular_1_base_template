(function(){
    'use strict';

    angular
        .module('boilerplate')
        .config(config);

    config.$inject  = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('boilerplate', {
                url: '',
                abstract: true
            });
    }

})();
