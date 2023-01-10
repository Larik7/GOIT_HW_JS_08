import player from '@vimeo/player';
import  throttle  from 'lodash.throttle';

// const iframe = document.querySelector('iframe');
// // const iframePlayer = new Vimeo.Player(iframe);
// const CURRENT_TIME = 'videoplayer-current-time';
// const player = new Vimeo.Player(iframe);

// player.on('timeupdate', function (currentTime) {
//     const seconds = currentTime.seconds;
//     localStorage.setItem(CURRENT_TIME, JSON.stringify(seconds));
// });

// player.on('play', onPlay);
// player.on('eventName', function(data) {
//     // data is an object containing properties specific to that event
// });

// setCurrentTime

// player.setCurrentTime(30.456).then(function(seconds) {
//     // seconds = the actual time that the player seeked to
// }).catch(function(error) {
//     switch (error.name) {
//         case 'RangeError':
//             // the time was less than 0 or greater than the video’s duration
//             break;

//         default:
//             // some other error occurred
//             break;
//     }
// });


// getCurrentTime()

// player.getCurrentTime().then(function(seconds) {
//     // seconds = the current playback position
// }).catch(function(error) {
//     // an error occurred
// });


console.log(Player);
