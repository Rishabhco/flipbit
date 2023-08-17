import React from 'react'
import { Link } from 'react-router-dom'

const list=[
  { src: "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg", to: '/categories/medicines',  },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg', to: '/categories/shoes',  },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg', to: '/categories/bags',  },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg', to: '/categories/furniture',  },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg', to: '/categories/watches',  },
  { src: 'https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg', to: '/categories/tshirts',  },
]

const brands = [
  {
    id: 1,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 2,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 3,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 4,
    name: 'Basic Tee',
    href: '#',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 5,
    name: 'Basic Tee',
    href: '/categories/medicines',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 6,
    name: 'Basic Tee',
    href: '/categories/medicines',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 7,
    name: 'Basic Tee',
    href: '/categories/medicines',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  {
    id: 8,
    name: 'Basic Tee',
    href: '/categories/medicines',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
    price: '$35',
    color: 'Black',
  },
  // More products...
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
            <Link to={item.to} key={item.to}>
              <img class="h-auto max-w-full rounded-lg" src={item.src} alt=""/>
            </Link>
          ))
        }
      </div>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Recommended For You</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {brands.map((brand) => (
            <div key={brand.id} className="group relative">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <Link to={brand.href}>
                  <img src={brand.imageSrc} alt={brand.imageAlt} className="h-full w-full object-cover object-center lg:h-full lg:w-full"/>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}