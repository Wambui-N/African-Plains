import { Donations } from '@/Sections/Donations'
import Internships from '@/Sections/Internships'
import Partnerships from '@/Sections/Partnerships'
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