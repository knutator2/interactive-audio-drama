var React = require('react');
// EventEmitter = require('events').EventEmitter,

var InfoBoxComponent = require('./infobox.jsx');

var DecisionComponent = React.createClass({

    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {
        
    },

    onDecision : function(data) {
        this.props.onDecision(data.targetId);
        console.log(data);
    },

    render: function() {
        console.log(this.props.onDecision);
        var infobox = this.props.infobox ? this.props.infobox: {};
        var decisions = this.props.decisions ? this.props.decisions : [];
        console.log('render');
        var self = this;
        return (
            <div >
                <InfoBoxComponent text={infobox.text} facts={infobox.facts} />
                {decisions.map(function(data, i, list) {
                    var boundClick = self.onDecision.bind(self, data);
                    return <div key={i}><button onClick={boundClick}>{data.label}</button></div>
                })}
            </div>
        );
    }
});

module.exports = DecisionComponent;