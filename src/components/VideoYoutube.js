import React, { useState, useEffect } from 'react';
import YTSearch from 'youtube-api-search';

import '../Styles/SectionFour.css';

const VideoYoutube = (props) => {

    const [videoId, setVideoId] = useState('');

    useEffect(() => {
        //clave de API
        const API_KEY = 'AIzaSyAwhnzZqpUFbe8ljJSWytzxHuKPD8LRu14';

        const searchTerm = props.tituloVideo;

        YTSearch({ key: API_KEY, term: searchTerm }, (data) => {
            if (data && data.length > 0) {

                setVideoId(data[0].id.videoId);
                console.log('https://www.youtube.com/embed/${videoId}`');
            }
        });
    }, []);

    return (
        <>
            {videoId ? (
                <iframe
                    width="560"
                    height="315"
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            ) : (
                <p>Cargando...</p>
            )}
        </>
    );
}

export default VideoYoutube;