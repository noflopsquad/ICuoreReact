var TwitterSearch = CUORE.Class(CUORE.Page, {

  initializeServices: function() {
      this.addService(new Twitter());
  },

  initializeComponents: function() {
    this.addComponent(new SearchBox(),'search_box');
    this.addComponent(new Packages(),'packages');
    this.addComponent(new Translator(),'tranlator-home');
  },

});