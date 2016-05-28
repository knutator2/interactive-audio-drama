var React = require('react');
// EventEmitter = require('events').EventEmitter,

var InfoboxComponent = React.createClass({

    getInitialState: function() {
        return {};
    },

    componentWillMount: function() {
    },

    render: function() {
        var facts = this.props.facts ? this.props.facts : [];
        return (
            <div>
                <h2>Infobox</h2>
                <p>
                    {this.props.text}
                </p>
                <ul>
                    {facts.map(function(data, i, list) {
                        return (<li key={i}>{data}</li>)
                    })}
                </ul>
            </div>
        );
    }
});

module.exports = InfoboxComponent;