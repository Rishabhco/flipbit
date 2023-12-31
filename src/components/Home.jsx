import React, { useEffect,useState } from 'react'
import { Link } from 'react-router-dom'
import { instance } from '../auth/auth'


export default function Home() {
  const [list, setList] = useState([])
  const [brands, setBrands] = useState([])

  useEffect(()=>{
    instance.get("item/fetchCategories",{
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    }).then((res)=>{
      setList(res.data)
    }).catch((err)=>{
      console.log(err)
    })
    instance.get("item/fetchBrands").then((res)=>{
      setBrands(res.data)
    }).catch((err)=>{
      console.log(err)
    })
  })

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
            <Link to={`categories/${item.name}`} key={item.name}>
              <img class="h-auto max-w-full rounded-lg" src={item.src} alt={item.name}/>
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