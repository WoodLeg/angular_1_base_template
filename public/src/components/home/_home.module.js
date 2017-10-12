(function(){
    'use strict';



    angular
        .module('boilerplate.home', [])
        .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider){

        $stateProvider
            .state('boilerplate.home', {
                url: '/home',
                views: {
                    'content@': {
                        templateUrl: '/src/components/home/home.html',
                        controller: 'homeController as ctrl'
                    }
                }

            });

    }

})();
