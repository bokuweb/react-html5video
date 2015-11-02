import React from 'react';
import Icon from './../../icon/icon';

var Time = React.createClass({

    propTypes: {
        currentTime: React.PropTypes.number,
        duration: React.PropTypes.number
    },

    /**
     * Formats time into a friendlier format
     * @param  {number} seconds Time in seconds
     * @return {string}         Timestamp in the format of HH:MM:SS
     */
    formatTime(seconds) {
        var date = new Date(null);
        seconds = isNaN(seconds) ? 0 : Math.floor(seconds);
        date.setSeconds(seconds);
        return date.toISOString().substr(11, 8);
    },

    render() {
        return (
            <div className="video-time video__control">
                <span className="video-time__current">
                    {this.formatTime(this.props.currentTime)}
                </span>
                /
                <span className="video-time__duration">
                    {this.formatTime(this.props.duration)}
                </span>
            </div>
        );
    }
});

export default Time;
