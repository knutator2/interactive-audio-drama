var React = require('react');

var HeaderComponent = require('./header.jsx');
var FooterComponent = require('./footer.jsx');
var AudioplayerComponent = require('./audioplayer.jsx');
var DecisionComponent = require('./decision.jsx');
require('whatwg-fetch');
//var EventEmitter = require('events').EventEmitter,

var MainComponent = React.createClass({

    getInitialState: function() {
        return {
            currentNodeId : 0
        };
    },

    componentDidMount: function() {
        var self = this;
        fetch('/data/master.json')
            .then(function(response) {
                return response.json();
            })
            .then(function(result) {
                self.setState({ title: result.title, nodes: result.nodes});
            });
    },

    decisionFunction :  function(id) {

        console.log(id);
        this.setState({currentNodeId: id});
        console.log(this);

    },

    render: function() {
        var self = this;
        console.log(self.state);
        var currentNode = self.state.nodes ? self.state.nodes[self.state.currentNodeId] : {};
        console.log(currentNode);
        return (
            <div>
                <HeaderComponent title={this.state.title} />
                <AudioplayerComponent darkTheme={false}/>
                <div>
                    <h1>Hello Knut!</h1>
                </div>

                <DecisionComponent decisions={currentNode.decisions} infobox={currentNode.infobox} onDecision={this.decisionFunction}/>

                <FooterComponent />
            </div>
        );
    }
});

module.exports = MainComponent;
