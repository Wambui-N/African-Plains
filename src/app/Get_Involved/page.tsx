import { Donations } from '@/sections/Donations'
import Internships from '@/sections/Internships'
import Partnerships from '@/sections/Partnerships'
import React from 'react'

const page = () => {
  return (
    <div>
        <Internships />
        <Partnerships />
        <Donations />
    </div>
  )
}

export default page