;(function () {

    angular.module("app")
        .directive ("tableTasks", function () {
            return {
                restrict: 'E',
                scope: '=',
                controller: 'TasksCtrl',
                templateUrl: 'app/directives/table-task.html'
            }

        })

})();