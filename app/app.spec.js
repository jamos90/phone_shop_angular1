describe('PhoneListController', function(){
  //Before each test we tell AngularJS to load the phonecatApp module.
  beforeEach(module('phonecatApp'));

 // We ask AngularJS to inject the $controller service into our test function.
  xit('should create a phones module with 3 phones', inject(function($controller){
    var scope = {};
    // We use $controller to create an instance of the PhoneListController.
    var ctr = $controller('PhoneListController', {$scope:scope});
    // With this instance, we verify that the phones array property on the scope contains three records.
    expect(scope.phones.length).toBe(3);
  }));
});
