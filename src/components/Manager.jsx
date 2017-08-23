var React = require('react');
var White = require('./White.jsx');
var Jumbo = require('./Jumbo.jsx');
var Special = require('./Special.jsx');
var Small = require('./Small.jsx');

var Manager = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-9">
            <div className="row">
              <White content={this.props.content.white[0]} className="col-sm-4" />
              <White content={this.props.content.white[1]} className="col-sm-4" />
              <White content={this.props.content.white[2]} className="col-sm-4" />
            </div>
            <Jumbo content={this.props.content.jumbo[0]} className="col-sm-4" />
            <Jumbo content={this.props.content.jumbo[1]} className="col-sm-4" />
          </div>
          <div className="col-sm-3">
            <Special content={this.props.content.special} />
            <Small content={this.props.content.small[0]} />
            <Small content={this.props.content.small[1]} />
            <Small content={this.props.content.small[2]} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Manager;
