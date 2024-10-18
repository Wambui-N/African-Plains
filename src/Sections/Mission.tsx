import Exposition from '@/Components/Exposition'
import React from 'react'

const Mission = () => {
  return (
    <div className="responsive">
      <div className="section">
        <Exposition title='Our Mission'
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

export default Mission