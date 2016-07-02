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
            <div className="infobox">
                <h2 className="infobox__headline">Infobox</h2>
                <p className="infobox__text">
                    {this.props.text}
                </p>
                <ul className="infobox__list">
                    {facts.map(function(data, i, list) {
                        return (<li key={i}>{data}</li>)
                    })}
                </ul>
            </div>
        );
    }
});

module.exports = InfoboxComponent;
