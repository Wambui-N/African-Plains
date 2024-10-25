import Exposition from '@/components/Exposition'
import React from 'react'

const Livestock = () => {
  return (
    <div className="responsive">
    <div className="section">
      <Exposition
        title="Livestock Development"
        children={
          <div className="flex flex-col gap-3">
            <p className="">
            Conservation of wildlife is largely intertwined with livestock because of their cultural and ecological compatibility.
            We are dedicated to supporting the local peoples’ livestock production efforts through pasture production, veterinary care and commercial value addition and marketing.
            </p>
          </div>
        }
      />
    </div>
  </div>
  )
}

export default Livestock