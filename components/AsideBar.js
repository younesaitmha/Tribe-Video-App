import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import animations from './../styles/animations.module.css'

import AsideButton from './AsideButton'


const AsideBar = () => {

    return (
        <aside className='aside-bar'>
            <h1 style={{fontFamily: 'Montserrat', fontWeight: 'bold', marginBottom: '64px', color: '#292B2E'}}>Tribe Video App</h1>
            <AsideButton name={'Video'} iconName={'bi bi-camera-video'} />
            <AsideButton name={'Audio'} iconName={'bi bi-mic'} />
            <AsideButton name={'Statistics'} iconName={'bi bi-file-bar-graph'} />
            <AsideButton name={'Settings'} iconName={'bi bi-gear-fill'} />

            <AsideButton nameClass={'btn-log-out'} name={'Log out'} iconName={'bi bi-box-arrow-right'} />
        </aside>
    )
}

export default AsideBar;
