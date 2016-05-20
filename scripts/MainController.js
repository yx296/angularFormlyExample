(function() {

		'use strict';

		angular
				.module('formlyApp')
				.controller('MainController', MainController);

		function MainController(province) {

				var vm = this;

				// The model object that we reference
				// on the  element in index.html
				vm.model = {
				};
				vm.onSubmit = function() {
					console.log('jabba');
				}
				// An array of our form fields with configuration
				// and options set. We make reference to this in
				// the 'fields' attribute on the  element
				vm.fields = [
						{
								key: 'license',
								type: 'input',
								templateOptions: {
										label: 'Driver\'s License Number',
										placeholder: 'Enter your drivers license number'
								},
								validators: {
										// Custom validator to check whether the driver's license
										// number that the user enters is valid or not
									required: function($viewValue, $modelValue, scope) {
										var value = $modelValue || $viewValue;
										console.log(value);
										if(!value) {
											return false
										}
										return true;
									 }
								}
						}
				];
		}

})();
