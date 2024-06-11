import React from 'react'
import Content from '@/components/(user)/doc/Content'
import { sections } from '@/lib/constant'

const Page = () => {
  return (
    <main>
      <Content sections={sections}/>
    </main>
  )
}

export default Page
