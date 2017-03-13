# MWareIPTVModule
MWare Solutions IPTV User Interface Module

##Intro
A collection of sample code and documentation to create modules for MWare IPTV user interface.

##Dependencies
* none

##Usage
Every module will be executed in the UI scope hence no need to import any libraries or plugins. jQuery is available during runtime.

Creating a new module is very easy

    var roomService = new MWareModule(options);

Module options

    options = {
    
      /*
       * this is the module identifier and also the main menu label
       */
      name: 'Room service',
      
      /*
       * path to the modules HTML content 
       */
      content: 'index.html',
      
      /*
       * if set to true this will become a video player module
       * player module does not need HTML content
       */
      player: false
      
      /*
       * module events
       */
      events: {
      
        /*
         * fires when the module is ready
         * this is the earliest point when zones can be created
         * and listeners attached
         */
        onLoad: function(){},
        
        /*
         * fires when the module is unloaded
         * this happens when a user switches to another page
         */
        onUnload: function(){}
      }
