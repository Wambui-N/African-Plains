import React from 'react'
import Exposition from '../components/Exposition'

const Vision = () => {
  return (
    <div className="responsive">
      <div className="section">
        <Exposition title='Our Vision'
          children={
            <div className="flex flex-col gap-3">
              <p className="">
              A future of shared prosperity where communities advance economically and culturally while wildlife populations and natural ecosystems thrive and continue to the current and future human endeavors.
              </p>
            </div>
          }
        />
    </div>
    </div>
  )
}

export default Vision