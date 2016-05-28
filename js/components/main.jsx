var React = require('react');
    // EventEmitter = require('events').EventEmitter,

var MainComponent = React.createClass({

    getInitialState: function() {
        return {};
    },

    componentWillMount: function() {
    },

    render: function() {
        return (
            <div>
                <h1>Hello Knut!</h1>
            </div>
        );
    }
});

module.exports = MainComponent;
