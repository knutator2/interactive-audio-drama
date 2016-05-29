var React = require('react');

var ButtonComponent = React.createClass({

    getInitialState: function() {
        return {};
    },

    render: function() {
        return (
            <button className="button" onClick={this.props.onClick}>{this.props.label}</button>
        );
    }
});

module.exports = ButtonComponent;
