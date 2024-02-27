import React from 'react'
import {  ThreeCircles } from 'react-loader-spinner'

function Loadder() {
  return (
<div className="flex justify-center m-52">


<ThreeCircles
  height="70"
  width="70"
  color="#699FC9"

  visible={true}
  ariaLabel="three-circles-rotating"

/>
</div>  )
}

export default Loadder