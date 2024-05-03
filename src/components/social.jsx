import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Social = () => {
  return (
    <div>
    {/*Social Media*/}
    <div className="flex gap-8 bg-white rounded-xl p-2">
      <a href="https://www.github.com/rmondev" target="_blank" rel="noopener noreferrer">
        <Image
          src='/github.png'
          alt='Github'
          width={24}
          height={24}
        />
      </a>

      <a href="https://www.linkedin.com/in/rmondev" target="_blank" rel="noopener noreferrer">
        <Image
          src='/linkedin.png'
          alt='LinkedIn'
          width={24}
          height={24}
        />
      </a>

      <a href="https://www.instagram.com/rmon.dev" target="_blank" rel="noopener noreferrer">
        <Image
          src='/instagram.png'
          alt='Instagram'
          width={24}
          height={24}
        />
      </a>
    </div>
  </div>

  )
}

export default Social
