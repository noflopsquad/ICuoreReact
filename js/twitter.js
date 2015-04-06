Twitter = CUORE.Class(CUORE.GETService, {

    init: function() {
      Twitter.parent.init.call(this);
      this.name = 'TWITTER';
    },


    search: function(terms, eventName) {
        var url = 'https://bower.herokuapp.com/packages/search/'+terms;
        this.request(url, null, eventName);
    },
    
    wrapRequestParams: function(params) {
        return params;
    },

    wrapResponse: function(response) {
        return response;
    }
});