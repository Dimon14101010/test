;(function () {
    "use strict";

    angular.module("app")
        .controller ('TasksCtrl',TasksCtrl);

    TasksCtrl.$inject =['TasksModel','$stateParams'];

    function TasksCtrl(TasksModel, $stateParams) {
        let vm = this;
        vm.activeTasks = [];
        vm.currentTask = {};
        vm.renameActive = false;
        TasksModel.getData().then(response => {vm.data = response.data;
        vm.data.forEach(res => {
            if (res.obj_status === 'active'){
                vm.activeTasks.push(res);
            }
            if (res.id == $stateParams.id){
                vm.currentTask = res;
            }
        });
        });
        vm.rename = function(newName){
            vm.renameActive = !vm.renameActive;
            vm.currentTask.name = newName;
        }


    }

})();