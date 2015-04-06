Packages = CUORE.Class(CUORE.Component, {

    init: function() {
      Packages.parent.init.call(this);
      this.packages = [];
      this.list = ReactClasses.packageList();
      this.addHandler("TWITTER_search_EXECUTED", new CUORE.Handlers.Executor("display"));
    },

    draw: function(){
      var container=this.container;
      var list = this.list;
      var data = {"packages": this.packages}
      React.render(
        React.createElement(list,data),
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

    display: function(data){
      this.packages = data;
      if(data.length > 100){
        this.packages = data.slice(0,100);
      }
      this.updateRender();
    }

});