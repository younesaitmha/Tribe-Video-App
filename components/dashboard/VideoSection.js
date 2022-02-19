import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import ButtonTribe from '../Button';
import Modal from './addVideo/Modal';


const VideoSection = () => {

    const videos = []
    const [showModal, setShowModal] = useState(false);


    return (
        <div className='container-img-video'>
            { !videos.length ? (
                <>
                <div className='wrapper-img-video'>
                    <Image className='img-video' src='/hero.png' width={'367px'} height={'270px'} alt='hero pic' />
                    <h2>You have no video!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In quis scelerisque turpis a amet fermentum.</p>
                    <div id="add-video" className='container-btn-video'>
                        <ButtonTribe type={'btn'} text={'Add video'} click={setShowModal} />
                    </div>
                </div>

                <Modal
                onClose={() => setShowModal(false)}
                show={showModal}
                title={'Upload new video'}
                children={<></>}
                />

                </>
            ): (
                <div></div>
            )}
        </div>
    );
}

export default VideoSection;
