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
            <footer className="footer">
                <p className="footer__text">Ein Projekt von Thomas Fett, Rinus Heinzmann, Konstantin Könnecke, Knut Perseke</p>
            </footer>
        );
    }
});

module.exports = FooterComponent;
