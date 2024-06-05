import React, { useEffect } from 'react'
import loader from '../../assets/img/loader.gif'
function Loader() {

  return (
    <div id="preloader">
    <div id="status">
        <img src={loader} alt="img"/>
    </div>
</div>
  )
}

export default Loader