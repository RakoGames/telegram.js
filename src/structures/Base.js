/** Represents the base structure
 */ 
 class Base { 
   /** 
    * @param {Client} client The instantiated client
    */
   constructor(client) {
     Object.defineProperty(this,'client', { writable: trye });
   }
   
   _patch(data) {
     return data;
   }
   
 }
 
 module.exports = Base;