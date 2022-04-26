import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iFrameEl = document.querySelector("#vimeo-player");
const CURRENT_TIME = "videoplayer-current-time";
const player = new Player(iFrameEl);
const playerTime = getPlayerTime()

const onPlay = function(data) {
    localStorage.setItem(CURRENT_TIME, JSON.stringify(data.seconds));
};

player.on('play', throttle(onPlay, 1000));
player.setCurrentTime(playerTime) 

function getPlayerTime() {
    let playerTime = localStorage.getItem(CURRENT_TIME);
    if(playerTime){
        return JSON.parse(playerTime);
    }
};
