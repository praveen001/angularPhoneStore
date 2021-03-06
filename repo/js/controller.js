(function() {
	var app = angular.module("store", ['ngRoute', 'productControllerApp']);

	app.config(['$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'products.html',
			controller: 'productController'
		}).when('/product/:productId', {
			templateUrl: 'product-details.html',
			controller : 'productDetailsController'
		}).otherwise({
			redirectTo: '/'
		});
	}]);
})();
