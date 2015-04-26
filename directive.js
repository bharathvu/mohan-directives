
angular.module('ek-directives',[]);

angular.module('ek-directives').directive('ekNumericOnly', function(){
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function (inputValue) {
                    if (inputValue == undefined) return '';
                    var transformedInput = inputValue.toString().replace(/[^0-9]/g, '');
                    if (transformedInput != inputValue) {
                        modelCtrl.$setViewValue(transformedInput);
                        modelCtrl.$render();
                    }

                    if (transformedInput === "0") {
                        modelCtrl.$setViewValue('');
                        modelCtrl.$render();
                    }

                    return (transformedInput === "0") ? '' : transformedInput;
                });
            }
        }
    });
