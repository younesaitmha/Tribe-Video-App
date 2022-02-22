import Image from 'next/image';
import React, { useEffect, useState, useCallback } from 'react';
import ButtonTribe from '../Button';
import Modal from './addVideo/Modal';
import {useDropzone} from 'react-dropzone';

import styles from './../../styles/videoSection.module.css'




function MyDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <div {...getRootProps()} style={{
        margin: '0 auto',
        width: '650px',
        height: '346px',
        backgroundColor: '#F8F9FB',
        border: '1px dashed #B6BDCB',
        boxSizing: 'border-box',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}>
      <input {...getInputProps()} />
      {
        isDragActive ?
          <p>Drop the files here ...</p> :
          <>
            <Image className={styles.videoIcon} src='/Video.svg' width={60} height={40} />
            <h2 style={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '16px',
                lineHeight: '150%',
                textAlign: 'center',
                color: '#292B2E'
            }}>Drag and drop video files to upload</h2>
            <p style={{
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontSize: '14px',
                lineHeight: '150%',
                color: '#666666',
                marginTop: '0',
                paddingTop: '0'
            }}>Choose a PNG, JPG, or GIF file from your device</p>
            <button style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                padding: '12px 32px',
                marginTop: '10px',
                background: '#005FFC',
                border: 'none',
                borderRadius: '8px',
                fontFamily: 'Montserrat',
                fontStyle: 'normal',
                fontWeight: '600',
                fontSize: '13px',
                lineHeight: '16px',
                color: '#FFFFFF',
            }}> Select a file </button></>
      }
    </div>
  )
}




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
                >
                    <MyDropzone />
                </Modal>

                </>
            ): (
                <div></div>
            )}
        </div>
    );
}

export default VideoSection;
