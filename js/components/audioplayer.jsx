var React = require('react'),
    Wavesurfer = require('react-wavesurfer').default
    classNames = require('classnames');

var AudioplayerComponent = React.createClass({

    getInitialState: function() {
        var waveColor = this.props.darkTheme ? '#222' : '#ddd';
        var progressColor = this.props.darkTheme ? '000' : '#fff';

        return {
            audioFile: '/data/audio/MoufflonMusic.mp3',
            backgroundImage: '/data/images/background.jpg',
            playing: false,
            pos: 0,
            wavesurferOptions: {
                waveColor: waveColor,
                progressColor: progressColor
            }
        };
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
                    audioFile="http://localhost:8080/data/audio/MoufflonMusic.mp3"
                    pos={this.state.pos}
                    playing={this.state.playing}
                    options={this.state.wavesurferOptions}
                    onFinish={this.audioFinishedHandler}
                />
                <img className="audioplayer__background-image" src={this.state.backgroundImage} />
                <button className={buttonPlayClass} onClick={this.playAudio} />
                <button className={buttonPauseClass} onClick={this.pauseAudio} />
            </div>
        );
    }
});

module.exports = AudioplayerComponent;
