/**
* @finame services.js
* @author Arun Kumar Singh ( arun.enjoys@gmail.com)
* @date 3/7/2016
* @desc This is basic service.js file for the app.
* @copyright MIT 
*/

'use strict';

/**
  * @namespace shoppingApp
  * @module_name shoppingApp controller
  * @desc This is service.js file that includes defines the all the services required for the SPA 
  */
angular.module('shoppingApp')
        .service('cartService',function() {
            var product ={  
                   "productsInCart":[  
                      {  
                         "p_id":"1",
                         "p_name":"cotton tshirt",
                         "p_variation":"solid green",
                         "p_style":"ms13kt1906",
                         "p_selected_color":{  
                            "name":"blue",
                            "hexcode":"#1169BD"
                         },
                         "p_selected_size":{  
                            "name":"small",
                            "code":"s"
                         },
                         "p_available_options":{  
                            "colors":[  
                               {  
                                  "name":"green",
                                  "hexcode":"#A3D2A1"
                               },
                               {  
                                  "name":"yellow",
                                  "hexcode":"#F9F8E6"
                               },
                               {  
                                  "name":"red",
                                  "hexcode":"#ED99A8"
                               }
                            ],
                            "sizes":[  
                               {  
                                  "name":"small",
                                  "code":"s"
                               },
                               {  
                                  "name":"medium",
                                  "code":"m"
                               },
                               {  
                                  "name":"large",
                                  "code":"l"
                               },
                               {  
                                  "name":"extra large",
                                  "code":"xl"
                               }
                            ]
                         },
                         "p_quantity":1,
                         "p_originalprice":11.0,
                         "p_price":11.0,
                         "c_currency":"$"
                      },
                      {  
                         "p_id":"2",
                         "p_name":"print girls tee",
                         "p_variation":"pink rainbow",
                         "p_style":"ms13kt1906",
                         "p_selected_color":{  
                            "name":"pink",
                            "hexcode":"#F1DDEF"
                         },
                         "p_selected_size":{  
                            "name":"small",
                            "code":"s"
                         },
                         "p_available_options":{  
                            "colors":[  
                               {  
                                  "name":"green",
                                  "hexcode":"#A3D2A1"
                               },
                               {  
                                  "name":"yellow",
                                  "hexcode":"#F9F8E6"
                               },
                               {  
                                  "name":"pink",
                                  "hexcode":"#F1DDEF"
                               }
                            ],
                            "sizes":[  
                               {  
                                  "name":"small",
                                  "code":"s"
                               },
                               {  
                                  "name":"medium",
                                  "code":"m"
                               },
                               {  
                                  "name":"large",
                                  "code":"l"
                               },
                               {  
                                  "name":"extra large",
                                  "code":"xl"
                               }
                            ]
                         },
                         "p_quantity":1,
                         "p_originalprice":17.0,
                         "p_price":17.0,
                         "c_currency":"$"
                      },
                      {  
                         "p_id":"3",
                         "p_name":"flower pattern shirt",
                         "p_variation":"blue",
                         "p_style":"ms13kt1906",
                         "p_selected_color":{  
                            "name":"blue",
                            "hexcode":"#1169BD"
                         },
                         "p_selected_size":{  
                            "name":"small",
                            "code":"s"
                         },
                         "p_available_options":{  
                            "colors":[  
                               {  
                                  "name":"green",
                                  "hexcode":"#A3D2A1"
                               },
                               {  
                                  "name":"blue",
                                  "hexcode":"#1169BD"
                               },
                               {  
                                  "name":"red",
                                  "hexcode":"#ED99A8"
                               }
                            ],
                            "sizes":[  
                               {  
                                  "name":"small",
                                  "code":"s"
                               },
                               {  
                                  "name":"medium",
                                  "code":"m"
                               },
                               {  
                                  "name":"large",
                                  "code":"l"
                               },
                               {  
                                  "name":"extra large",
                                  "code":"xl"
                               }
                            ]
                         },
                         "p_quantity":1,
                         "p_originalprice":21.0,
                         "p_price":9.0,
                         "c_currency":"$"
                      },
                      {  
                         "p_id":"4",
                         "p_name":"check pattern tshirt",
                         "p_variation":"mens red",
                         "p_style":"ms13kt1906",
                         "p_selected_color":{  
                            "name":"red",
                            "hexcode":""
                         },
                         "p_selected_size":{  
                            "name":"small",
                            "code":"s"
                         },
                         "p_available_options":{  
                            "colors":[  
                               {  
                                  "name":"green",
                                  "hexcode":"#A3D2A1"
                               },
                               {  
                                  "name":"yellow",
                                  "hexcode":"#F9F8E6"
                               },
                               {  
                                  "name":"red",
                                  "hexcode":"#ED99A8"
                               }
                            ],
                            "sizes":[  
                               {  
                                  "name":"small",
                                  "code":"s"
                               },
                               {  
                                  "name":"medium",
                                  "code":"m"
                               },
                               {  
                                  "name":"large",
                                  "code":"l"
                               },
                               {  
                                  "name":"extra large",
                                  "code":"xl"
                               }
                            ]
                         },
                         "p_quantity":1,
                         "p_originalprice":22.0,
                         "p_price":22.0,
                         "c_currency":"$"
                      }
                   ]
                };

                /**
                * @function getCartItems
                * @desc returns the cart items
                */
                this.getCartItems = function(){
                  return product.productsInCart
                };

                /**
                * @function getNoOfItems
                * @desc returns item count
                */
                this.getNoOfItems = function(){
                  return product.productsInCart.length;
                };

                /**
                * @function addToCart
                * @desc submit addToCart
                */
                this.addToCart = function(p_id){
                    product.productsInCart.push(item);
                };

                /**
                * @function deleteCartItem
                * @desc submit deleteCartItem
                */
                this.deleteCartItem = function(p_id){
                    //TODO
                };

                /**
                * @function updateCartItem
                * @desc submit updateCartItem
                */
                this.updateCartItem = function(p_id){
                    //TODO
                };

        });

