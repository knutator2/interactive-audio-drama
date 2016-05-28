var React = require('react');
// EventEmitter = require('events').EventEmitter,

var HeaderComponent = React.createClass({

    getInitialState: function() {
        return {};
    },

    render: function() {
        return (
            <header>
                <h1>{this.props.title}</h1>
            </header>
        );
    }
});

module.exports = HeaderComponent;