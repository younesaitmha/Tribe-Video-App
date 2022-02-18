import Image from 'next/image';
import React, { useEffect } from 'react';
import ButtonTribe from '../Button';


const VideoSection = () => {

    const videos = []

    return (
        <div className='container-img-video'>
            { !videos.length ? (
                <div className='wrapper-img-video'>
                    <Image className='img-video' src='/hero.png' width={'367px'} height={'270px'} alt='hero pic' />
                    <h2>You have no video!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis scelerisque turpis a amet fermentum.</p>
                    <div className='container-btn-video'>
                        <ButtonTribe type={'btn'} text={'Add video'} />
                    </div>
                </div>
            ): (
                <div></div>
            )}
        </div>
    );
}

export default VideoSection;
