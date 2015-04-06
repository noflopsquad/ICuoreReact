Translator = CUORE.Class(CUORE.Component, {

    init: function() {
      Translator.parent.init.call(this);
      this.subjects = this.toTranslate();
      var keys = Object.keys(this.subjects);
      this.setI18NKeys(keys);
    },


    updateRender: function() {
      if(!this.container) return;
        this.draw();
    },

    setContainer: function(container) {
      this.container = container
    },

    toTranslate: function(){
      var elements = this.elementsWithCkey();
      var keys={};

      for (var i = elements.length - 1; i >= 0; i--) {
        keys[elements[i].getAttribute("c-key")] = elements[i];
      };
      return keys;
    },

    elementsWithCkey: function(){
      var allElements = document.getElementsByTagName("*");
      var result=[];
      for (var i = allElements.length - 1; i >= 0; i--) {
        if (allElements[i].getAttribute("c-key")){
          result.push(allElements[i]);
        }
      };
      return result;
    },

    setI18NKeys: function(keys){
      for (var i = keys.length - 1; i >= 0; i--) {
        this.setI18NKey(keys[i]);
      };
    },

    setI18NKey: function(key) {
        if (!key) return;

        this.setText(key, key);

        this.addHandler('LABELS_getLabel_EXECUTED_' + key, new CUORE.Handlers.Executor("translate"));
        this.requestLabelText(key);
    },

    translate: function(response) {
      var theMessage = response;
      var text = theMessage.getFromAnswer('text');
      var key = theMessage.getFromQuery('key');
      var subject = this.subjects[key];
      subject.innerHTML = text; 
    }


});