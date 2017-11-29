;(function () {

    angular.module("app",["ui.router"])
        .config (function($stateProvider,$locationProvider) {

            $locationProvider.html5Mode(true);

            $stateProvider
                .state('dashboard', {
                    url: '/',
                    templateUrl: 'app/dashboard/dashboard.html'
                })
                .state('task', {
                    url: '/task/:id',
                    templateUrl: 'app/task.html'
                });
        })

})();