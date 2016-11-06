/**
* @finame app.js
* @author Arun Kumar Singh ( arun.enjoys@gmail.com)
* @date 3/7/2016
* @desc This is basic app.js file for the app.
* @copyright MIT 
*/

'use strict';
/**
  * @namespace shoppingApp
  * @module_name shoppingApp
  * @desc This is app.js file that includes the basic configuration that is required to start the app
  *       This file uses router and ng resource for SPA.
  * @args ui.router {String : Object} to provide basic routing
  *       ngResource {String : object} to provide resouce directly from service
  */
angular.module('shoppingApp', ['ui.router','ngResource'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            /**
            * @route for default url
            * @desc This is default page for SPA. It has header , content and footer sectior.
            *       the page also includes the modals
            */
            .state('app', {
                url:'/',
                views: {
                    'header': {
                        'templateUrl' : 'views/header.html',
                    },
                    'content': {
                        templateUrl : 'views/shopping-item.html',
                    },
                    'footer': {
                        templateUrl : 'views/footer.html',  
                    },
                    'itemModal' :{
                        templateUrl : 'views/item-detail-modal.html'
                    },
                    'todoModal' :{
                        templateUrl : 'views/todo.html'
                    }
                }
            })
        
            /**
            * @route  aboutus
            * @desc  To show about us page
            */
            .state('app.aboutus', {
                url:'aboutus',
                views: {
                    'content@': {
                        templateUrl : 'views/aboutus.html',
                        controller  : 'AboutController'                  
                    }
                }
            })
        
            /**
            * @route  contactus
            * @desc  To show contactus  page
            */
            .state('app.contactus', {
                url:'contactus',
                views: {
                    'content@': {
                        templateUrl : 'views/contactus.html',
                        controller  : 'ContactController'                  
                    }
                }
            })

            /**
            * @route  home
            * @desc  To show homne  page
            */
            .state('app.home', {
                url: 'home',
                views: {
                    'content@': {
                        templateUrl : 'views/home.html',
                        controller  : 'HomeController'
                    }
                }
            })

            /**
            * @route  itemdestils
            * @desc  To show items details as per item id 
            */
            .state('app.item', {
                url: 'item/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/itemdetail.html',
                        controller  : 'ItemDetailController'
                   }
                }
            });
    
        $urlRouterProvider.otherwise('/');
    })
;
