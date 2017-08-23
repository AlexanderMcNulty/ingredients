var React = require('react');

var Special = React.createClass({
  render: function() {
    var headingStyle={

    }

    if (this.props.content.color) {
      headingStyle.background = this.props.content.color;
    }

    return (
      <div style={headingStyle} className="panel panel-default">
        <div className="panel-heading">
        </div>
        <h4>{this.props.content.text}</h4>
      </div>
    );
  }
});

module.exports = Special;
