import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { setAuthToken } from './../lib/ApolloClient.js'
import { gql, useMutation } from '@apollo/client'
import { validate } from 'email-validator'


import LoadingScreen from './../components/LoadingScreen'
import AsideBar from './../components/AsideBar'
import VideoSection from './../components/dashboard/VideoSection'


const Dashboard = () => {
    const [loading, setLoading] = useState(true)

    return (
        <div className='container-dash'>
            <title>Tribe Video Dashboard</title>
            { !loading ? <LoadingScreen /> : <></>}

            <AsideBar />

            <VideoSection />

        </div>
    )
}


export default Dashboard;
