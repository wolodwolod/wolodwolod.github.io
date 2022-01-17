// import Vimeo from "@vimeo/player";
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
    const player = new Vimeo.Player(iframe);

player.on('play', function () {
    const currentTime = localStorage.getItem("videoplayer-current-time");
    
    player.setCurrentTime(currentTime);
});      
        
console.log('played the video!');


    
function setLocalStorageCurrentTime (data) {           
          
        localStorage.setItem("videoplayer-current-time", data.seconds);
        console.log(data.seconds); 
        };

const throttledSetLocalStorageCurrentTime = throttle(setLocalStorageCurrentTime, 1000);  
      
player.on('timeupdate', throttledSetLocalStorageCurrentTime);


function setLocalStorageCurrentTime (data) {           
          
        localStorage.setItem("videoplayer-current-time", data.seconds);
        console.log(data.seconds); 
        };

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

    
