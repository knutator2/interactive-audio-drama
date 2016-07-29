var React = require('react');

var HeaderComponent = require('./header.jsx');
var FooterComponent = require('./footer.jsx');
var ButtonComponent = require('./button.jsx');
var AudioplayerComponent = require('./audioplayer.jsx');
var DecisionComponent = require('./decision.jsx');
require('whatwg-fetch');

var MainComponent = React.createClass({

    getInitialState: function() {
        return {
            currentNodeId : 0,
            decisionsAreHidden: true
        };
    },

    componentDidMount: function() {
        var self = this;
        fetch('data/master.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                self.setState({ title: result.title, nodes: result.nodes});
            });
    },

    decisionFunction:  function(id) {
        this.setState({
            currentNodeId: id,
            decisionsAreHidden: true
        });
    },

    showDecisions: function() {
        this.setState({decisionsAreHidden: false});
    },

    render: function() {
        var self = this;
        var currentNode = self.state.nodes ? self.state.nodes[self.state.currentNodeId] : {};
        var showDecisionsButton = this.state.decisionsAreHidden
            ? <ButtonComponent onClick={this.showDecisions} label='Show Infobox and possible decisions' />
            : '';

        return (
            <div className="main-wrapper">
                <HeaderComponent title={this.state.title} />
                <h3>{currentNode.headline}</h3>
                <div className="main">
                    <figure>
                        <AudioplayerComponent
                            audioFile={currentNode.audio}
                            backgroundImage={currentNode.backgroundImage}
                            darkTheme={currentNode.darkTheme}
                            onAudioFinished={this.showDecisions}
                        />
                        <figcaption dangerouslySetInnerHTML={{__html:currentNode.license}}></figcaption>
                    </figure>
                    {showDecisionsButton}

                    <DecisionComponent
                        isHidden={this.state.decisionsAreHidden}
                        decisions={currentNode.decisions}
                        infobox={currentNode.infobox}
                        headline= {currentNode.headline}
                        onDecision={this.decisionFunction}
                    />
                </div>
                <FooterComponent />
            </div>
        );
    }
});

module.exports = MainComponent;
