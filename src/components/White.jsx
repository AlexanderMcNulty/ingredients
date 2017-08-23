var React = require('react');

var White = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
        </div>
        <h4>{this.props.content.text}</h4>
      </div>
    );
  }
});

module.exports = White;
