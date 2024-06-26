import React from 'react'
import User from '../components/profile/User'
import Kennel from '../components/profile/Kennel'
import Shop from '../components/profile/Shop'
import Banner from '../components/common/Banner'
import ProfileBanner from '../components/profile/ProfileBanner'

function UserProfile() {
    return (
        < div>
            {/* <User /> */}
            {/* <Banner/> */}
            <ProfileBanner/>
            <Kennel />
            {/* <Shop /> */}
        </div>
    )
}

export default UserProfile