import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { Dialog } from '@headlessui/react'
import {Link} from 'react-router-dom'

// const user = {
//   name: 'Tom Cook',
//   email: 'tom@example.com',
//   imageUrl:
//     'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
// }

const menuList=[
    { name: 'Women', href: '/',  },
    { name: 'Men', href: '/',  },
    { name: 'Kids', href: '/',  },
    { name: 'Clothes', href: '/',  },
    { name: 'Handbags', href: '/',  },
    { name: 'Shoes', href: '/',  },
    { name: 'Accessories', href: '/',  },
    { name: 'Jewellery', href: '/',  },
    { name: 'Sale', href: '/',  },
    { name: 'New', href: '/',  },
    { name: 'Brands', href: '/',  },
    { name: 'Designers', href: '/',  },
]

const navigation = [
  { name: 'Favourites', href: '/',  },
  { name: 'Cart', href: '/about',  },
  { name: 'Token', href: '/contact',  },
]

// const userNavigation = [
//   { name: 'Your Profile', href: '#' },
//   { name: 'Settings', href: '#' },
//   { name: 'Sign out', href: '#' },
// ]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
      <header className="inset-x-0 top-0 z-50 bg-gray-800 text-gray-400 divide-y divide-gray-500/8">
        <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
          <div className="flex">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-8 w-auto"
                src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt=""
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12 ml-6">
            {navigation.map((item) => (
              <Link key={item.name} to={item.href} className="text-sm font-semibold leading-6">
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link to="/login" className="text-sm font-semibold leading-6">
              Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50"/>
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-800 text-gray-400 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link to="/home" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt=""/>
              </Link>
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6 text-gray-400" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/8">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link key={item.name} to={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-gray-900">
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                    {menuList.map((item) => (
                    <Link key={item.name} to={item.href} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-gray-900">
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <Link to="/login" className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 hover:bg-gray-50 hover:text-gray-900">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
        <div className="hidden lg:flex lg:flex-row lg:justify-between lg:mx-auto lg:max-w-7xl lg:px-4 lg:py-2 sm:px-6 lg:px-8">
            {menuList.map((item) => (<Link key={item.name} to={item.href} className="text-l font-semibold tracking-tight text-gray-400">{item.name}</Link>))}
        </div>
      </header>
  )
}