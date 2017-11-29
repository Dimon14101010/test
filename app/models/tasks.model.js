;(function () {
    "use strict";

    angular.module("app")
        .factory ('TasksModel',TasksModel);
    TasksModel.$inject = ['$http'];

    function TasksModel($http) {
        let api = {
            getData,
            setData
        };
        
        function getData() {
            return $http.get("tasks.json");
        }
        function setData(name) {
            return $http.put("tasks.json",name);
        }
        return api;

    }

})();