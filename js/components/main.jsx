var React = require('react');

var HeaderComponent = require('./header.jsx');
var FooterComponent = require('./footer.jsx');
var AudioplayerComponent = require('./audioplayer.jsx');
require('whatwg-fetch');
    // EventEmitter = require('events').EventEmitter,

var MainComponent = React.createClass({

    getInitialState: function() {
        return {};
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

    render: function() {
        return (
            <div>
                <HeaderComponent title={this.state.title} />
                <AudioplayerComponent darkTheme={false}/>
                <div>
                    <h1>Hello Knut!</h1>
                </div>
                <FooterComponent />
            </div>
        );
    }
});

module.exports = MainComponent;
