var React = require('react'),
    Wavesurfer = require('react-wavesurfer').default
    classNames = require('classnames');

var AudioplayerComponent = React.createClass({

    getInitialState: function() {
        return {
            playing: false,
            pos: 0
        };
    },

    componentWillReceiveProps: function(nextProps) {
        // TODO: Fix this! It doesn't work, because the options are only applied on instantiating the wavesurfer player.
        var waveColor = nextProps.darkTheme ? '#222' : '#ddd';
        var progressColor = nextProps.darkTheme ? '000' : '#fff';

        this.setState({
            wavesurferOptions: {
                waveColor: waveColor,
                progressColor: progressColor
            }
        });
    },

    playAudio: function() {
        this.setState({
            playing: true
        });
    },

    pauseAudio: function() {
        this.setState({
            playing: false
        });
    },

    audioFinishedHandler: function() {
        this.props.onAudioFinished();
        this.setState({
            playing: false
        });
    },

    audioLoadedHandler: function() {
        this.setState({
            playing: false,
            pos: 0
        });
    },

    render: function() {
        var buttonPlayClass = classNames(
            'audioplayer__button-play',
            {'audioplayer__button-play--dark': this.props.darkTheme}
        );

        var buttonPauseClass = classNames(
            'audioplayer__button-pause',
            {'audioplayer__button-pause--dark': this.props.darkTheme}
        );

        return (
            <div className="audioplayer">
                <Wavesurfer
                    audioFile={this.props.audioFile}
                    pos={this.state.pos}
                    playing={this.state.playing}
                    options={this.state.wavesurferOptions}
                    onFinish={this.audioFinishedHandler}
                    onLoading={this.audioLoadedHandler}
                />
                <img className="audioplayer__background-image" src={this.props.backgroundImage} />
                <button className={buttonPlayClass} onClick={this.playAudio} />
                <button className={buttonPauseClass} onClick={this.pauseAudio} />
            </div>
        );
    }
});

module.exports = AudioplayerComponent;
