describe ("first test", function () {
    var http;
    it ('should be done', function ($http) {
        http = $http.get("tasks.json");
        expect(http).toEqual(1)
    })
})