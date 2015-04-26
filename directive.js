
angular.module('ek-module',[])
    .directive('ek-directive', function(){
        return {
            require: 'ngModel',
            link: function (scope, element, attrs, modelCtrl) {
                modelCtrl.$parsers.push(function (inputValue) {
                    // this next if is necessary for when using ng-required on your input.
                    // In such cases, when a letter is typed first, this parser will be called
                    // again, and the 2nd time, the value will be undefined
                    //console.log(inputValue);
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