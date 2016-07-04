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
        var hasfacts = this.props.facts.length > 0 ? true : false

        return (
            <div className="infobox">
                <h2 className="infobox__headline">Infobox</h2>
                <p className="infobox__text" dangerouslySetInnerHTML={{__html:this.props.text}}>
                </p>
                {hasfacts ? <h3>Facts</h3> : null}
                <ul className="infobox__list">
                    {facts.map(function(data, i, list) {
                        return (<li key={i} dangerouslySetInnerHTML={{__html:data}}></li>)
                    })}
                </ul>
            </div>
        );
    }
});

module.exports = InfoboxComponent;
