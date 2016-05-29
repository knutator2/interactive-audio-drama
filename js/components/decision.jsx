var React = require('react');
var InfoBoxComponent = require('./infobox.jsx');
var ButtonComponent = require('./button.jsx');

var DecisionComponent = React.createClass({

    getInitialState: function() {
        return {};
    },

    componentDidMount: function() {

    },

    onDecision : function(data) {
        this.props.onDecision(data.targetId);
    },

    render: function() {
        var self = this;
        var infobox = this.props.infobox ? this.props.infobox: {};
        var decisions = this.props.decisions ? this.props.decisions : [];

        if (this.props.isHidden) {
            return (
                <div></div>
            );
        } else {
            return (
                <div className="decision">
                    <InfoBoxComponent text={infobox.text} facts={infobox.facts} />
                    {decisions.map(function(data, i, list) {
                        var boundClick = self.onDecision.bind(self, data);
                        return <ButtonComponent label={data.label} onClick={boundClick} key={i} />
                    })}
                </div>
            );
        }
    }
});

module.exports = DecisionComponent;
