SearchBox = CUORE.Class(CUORE.Component, {

    init: function() {
      SearchBox.parent.init.call(this);
      this.box = ReactClasses.searchBox();
      this.setI18NKey("searchbox.placeholder");
      this.addHandler("search_box_changed", new CUORE.Handlers.Executor("search"));
    },

    draw: function(){
      var container=this.container;
      var box = this.box;
      var placeholder=this.getText("searchbox.placeholder");

      React.render(
        React.createElement(box,{"placeholder": placeholder}),
        document.getElementById(container)
      );
    },

    updateRender: function() {
      if(!this.container) return;
        this.draw();
    },

    setContainer: function(container) {
      this.container=container
    },

    search:function(params){
    if (params.length < 4) return;
      this.execute("TWITTER","search",params);
    }

});