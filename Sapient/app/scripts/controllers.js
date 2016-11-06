/**
* @finame controller.js
* @author Arun Kumar Singh ( arun.enjoys@gmail.com)
* @date 3/7/2016
* @desc This is basic app.js file for the app.
* @copyright MIT 
*/

'use strict';

/**
  * @namespace shoppingApp
  * @module_name shoppingApp controller
  * @desc This is controller.js file that includes defines the all the controller required for the SPA 
  */
angular.module('shoppingApp')
       /**
        * @namespace shoppingApp
        * @module_name shoppingApp filter
        * @name capitalize
        * @desc This is filter to make first letter of any string capital
        */
       .filter('capitalize', function() {
            return function(input) {
              return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
            }
        })

        /**
        * @namespace shoppingApp
        * @module_name shoppingApp CartController
        * @name CartController
        * @desc CartController includes all the resources required for the cart page
        */
       .controller('CartController',['$scope','cartService',function($scope,cartService){
            /**
            * @fieldName items
            * @desc to store the cart items 
            */
            $scope.items = '';
            /**
            * @fieldName title
            * @desc to store the title
            */
            $scope.title = 'Your Shopping Bag';
            /**
            * @fieldName noItems
            * @desc to store the noItems
            */
            $scope.noItems = 0;
            /**
            * @fieldName discountCode
            * @desc to store the discountCode 
            */
            $scope.discountCode = 'JF05';
            /**
            * @fieldName totalSum
            * @desc to store the totalSum
            */
            $scope.totalSum = 0;

            /**
            * @function loadInitialData
            * @desc Loads initial data for the cart 
            */
            $scope.loadInitialData = function(){
              $scope.items = cartService.getCartItems();
              $scope.noItems = cartService.getNoOfItems();
            }

            // calculate discount
            function setDiscount(){
              var discount = 0;
              if($scope.noItems > 0 && $scope.noItems <=3){
                    $scope.discountCode = 'JF05';
                    discount = 5;
              }else if($scope.noItems > 3 && $scope.noItems <=6){
                    $scope.discountCode = 'JF10';
                    discount = 10;
              }else if($scope.noItems > 6){
                    $scope.discountCode =  'JF25';
                    discount = 25;
              }
                setTotal(discount);
            };

            // calculated item count
            function setItemCount(){
               
                var count = 0;
                for (var i = $scope.items.length - 1; i >= 0; i--) {
                  count = count + parseInt($scope.items.p_quantity ,10);
                }
                $scope.noItems = count;
            }

             //calculates total 
            function setTotal(discount){
                var amount = 0;
                for (var i = $scope.items.length - 1; i >= 0; i--) {
                  amount = amount + parseInt($scope.items.p_quantity ,10) * parseInt($scope.items.p_price ,10);
                }
                $scope.totalSum = amount* (100-discount)/100;
            };

            /**
            * @function openForEdit
            * @desc open modal popup for edit
            */
            $scope.openForEdit = function(e){
              var id = parseInt( $(e.target).attr('data-id'));
              $scope.item = $scope.items[id-1];
              $scope.srcImg = 'images/T'+(id)+'.jpg';
            }

            /**
            * @function edit
            * @desc submit edit
            */
            $scope.edit = function(){
              $scope.items[$scope.item.p_id-1].p_quantity = $scope.item.p_quantity;
              $scope.items[$scope.item.p_id-1].p_size = $scope.item.p_size;
              setItemCount();
            }

            /**
            * @watch noitems
            * @desc fires when no of item chnages
            */          
            $scope.$watch('noItems',function(){
              setDiscount();
            });
       }])

        /**
        * @namespace shoppingApp
        * @module_name shoppingApp HomeController
        * @name HomeController
        * @desc HomeController includes all the resources required for the home page
        */
       .controller('HomeController',['$scope',function($scope){

       }])

        /**
        * @namespace shoppingApp
        * @module_name shoppingApp AboutController
        * @name AboutController
        * @desc AboutController includes all the resources required for the contact page
        */
        .controller('AboutController',['$scope',function($scope){

       }])

        /**
        * @namespace shoppingApp
        * @module_name shoppingApp ContactController
        * @name ContactController
        * @desc ContactController includes all the resources required for the contact page
        */
       .controller('ContactController',['$scope',function($scope){

       }])

        /**
        * @namespace shoppingApp
        * @module_name shoppingApp CareerController
        * @name CareerController
        * @desc CareerController includes all the resources required for the career page
        */
      .controller('CareerController',['$scope',function($scope){

       }]);


