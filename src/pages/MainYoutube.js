import { useRef, useState } from 'react';
import YouTube from 'react-youtube';

const MainYoutube = () => {
    const movie = useRef(null);

    const [auto, setAuto] = useState(false);

    const option = {
        width: '100%',
        height: '500',
        playerVars: {
            autoplay: 1,
            mute: 1,
            controls: 0,
            loof: 1,
            showinfo: 0,
            modestbranding: 1,
        },
    }

    const playVideo = e => {
        // e.target.playVideo();
        // console.log('play');
    }

    const pauseVideo = () => {
        console.log(movie.current)
        movie.current.pauseVideo();
    }

    return (
        <>
            <YouTube videoId="2g811Eo7K8U" opts={option} onReady={playVideo} ref={movie} />
            {/* <button>play</button>
            <button onClick={pauseVideo}>pause</button> */}
        </>
    )
}

export default MainYoutube;