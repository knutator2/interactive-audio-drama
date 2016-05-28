var React = require('react');
// EventEmitter = require('events').EventEmitter,

var FooterComponent = React.createClass({

    getInitialState: function() {
        return {};
    },

    componentWillMount: function() {
    },

    render: function() {
        return (
            <footer>
                <h1>Footer</h1>
            </footer>
        );
    }
});

module.exports = FooterComponent;