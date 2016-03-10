(function() {
	var productControllerApp = angular.module('productControllerApp', []);
	productControllerApp.controller('productController', function($scope, $http) {
		$http.get('data/data.json').success(function(data) {
			$scope.products = data;
		});
	});

	productControllerApp.controller('productDetailsController', function($scope, $routeParams, $http) {
		$http.get('data/product' + $routeParams.productId + '.json').success(function(data) {
			$scope.product = data;
			$scope.sliderDefault = $scope.product.images[0].full;
		});

		$scope.setImage = function(image) {
			$scope.sliderDefault = image.full;
		};
	});
})();
