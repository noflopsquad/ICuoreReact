ReactClasses={

  searchBox: function(){
      var form = React.createClass({displayName: 'SearchBox',

        handleSubmit: function(e) {
          e.preventDefault();
          CUORE.Bus.emit("search_box_changed",this.refs.terms.getDOMNode().value.trim());
        },

        render: function() {
          var literal = this.props.placeholder;
          return (
            React.createElement("form", {
                className: "validate",
                onChange: this.handleSubmit,
                id: "mc-embedded-subscribe-form",
                name: "mc-embedded-subscribe-form", 
                target: "_blank", 
                novalidate: null
              }, 
              React.createElement("input", {
                type: "email",
                placeholder: literal,
                ref: "terms"})
            )
          );
        }
      });
      return form; 
    },

    packageList: function(){
      var list = React.createClass({displayName: 'PackageList',
        render: function() {
          var packagesNodes = this.props.packages.map(function (bowerPackage) {
            return (
              React.createElement(ReactClasses.bowerPackage(), bowerPackage)
            );
          });

          return (
            React.createElement("div", {className: "row"}, 
              packagesNodes
            )
          );
        }
      });
      return list; 
    },

    bowerPackage: function(){
    var comment = React.createClass({displayName: "BowerPackage",
      render: function() {
        return (
          React.createElement("div", {className: "feature-box"}, 
            React.createElement("h4", null,
              React.createElement("i",{className: "fa fa-terminal fa-lg fa-fw"}),
              this.props.name
            ),React.createElement("p",null,this.props.url) 
          )
        );
      }
    });
    return comment;
  }

};