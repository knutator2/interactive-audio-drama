var React = require('react');
// EventEmitter = require('events').EventEmitter,

var HeaderComponent = React.createClass({

    getInitialState: function() {
        return {};
    },

    render: function() {
        return (
            <header className="header">
                <h1 className="header__headline">{this.props.title}</h1>
            </header>
        );
    }
});

module.exports = HeaderComponent;
