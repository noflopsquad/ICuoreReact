
CUORE.Dom.ready(function() {
  var currentLocale = (navigator.language || navigator.browserLanguage);
  
  document.labels = {};
  document.labels[currentLocale] = {
      "a.key": "a literal",
      "searchbox.placeholder": "zaragoza",
      "application.title" : "Bower (CUORE) React"
  };
  
  CUORE.Bus.enableDebug();

  document.page = new TwitterSearch();

  document.page.draw();
});