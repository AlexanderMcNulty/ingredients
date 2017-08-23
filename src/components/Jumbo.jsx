var React = require('react');

var Jumbo = React.createClass({
  render: function() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
        </div>
        <div>
          <h4>{this.props.content.text[0].text}</h4>
        </div>
        <div>
          <h4>{this.props.content.text[1].text}</h4>
        </div>
        <div>
          <h4>{this.props.content.text[2].text}</h4>
        </div>
      </div>
    );
  }
});

module.exports = Jumbo;
