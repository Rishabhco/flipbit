import React from 'react'
import { Link } from 'react-router-dom'

const list=[
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg", to: '/',  },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg', to: '/',  },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg', to: '/',  },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg', to: '/',  },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg', to: '/',  },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg', to: '/',  },
]

export default function Home() {
  return (
    <>
      <div class="grid gap-4">
        <div>
          <img class="h-72 w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/featured/image.jpg" alt=""/>
        </div>
      </div>
      <div class="mx-4 my-4 grid grid-cols-2 md:grid-cols-3 gap-4">
        {
          list.map((item) => (
            <Link to={item.to}>
              <img class="h-auto max-w-full rounded-lg" src={item.src} alt=""/>
            </Link>
          ))
        }
      </div>
    </>
  )
}
