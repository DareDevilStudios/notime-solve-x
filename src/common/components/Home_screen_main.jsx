import Image from 'next/image'
import React from 'react'

const Home_screen_main = () => {
  return (
    <div>
        <h1>Home screen main image</h1>
        <Image src="/website_screenshots/home_screen_main.png" alt="Next.js" width={600} height={160} />
    </div>
  )
}

export default Home_screen_main