angular.module('main').
	directive('individual', [function() {
		return {
			restrict: 'E',
			templateUrl: 'templates/main/ftrees/individual.html',
			scope: {
				individual: '=data',			
				treeNumber: '=',
				isSelected: '='
			},
			controller: ['$scope', '$state', '$stateParams', function($scope, $state, $stateParams) {

				$scope.goto_ftree_item = function(individual_id, tree_number) {
					if('@' + $stateParams.individual_id + '@' !== individual_id) {
						if ($state.includes('ftree-item')) {
							$state.go('ftree-item', {individual_id: individual_id, tree_number: tree_number});
						}
						else {
							$state.go('ftree-view.ftree-item', {individual_id: individual_id, tree_number: tree_number});	
						}
					}
				};

				$scope.display_more_info = function() {
					var display = false;
					var indiProperties = ["birth_date", "birth_place", "death_date", "death_place"];
					indiProperties.forEach(function(prop) {
						if ($scope.individual[prop] !== null) {
							display = true;
						}
					});
					return display;
				}
			}]
		};
	}]);