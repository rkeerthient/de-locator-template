import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/20/solid'

export default function AboutUs({description}:any) {
  return (
       <div className="mx-auto   rounded-2xl bg-white py-2">
        <Disclosure>
          {({ open }) => (
            <>
              <Disclosure.Button className="flex  justify-between rounded-lg  px-4 py-2 text-left text-sm font-medium">
                <span>Store Description</span>
                <ChevronDownIcon
                  className={`${
                    open ? 'rotate-180 transform' : ''
                  } h-5 w-5 text-purple-500`}
                />
              </Disclosure.Button>
              <Disclosure.Panel className="px-4 pb-2 pt-2 text-sm text-gray-500">
               {description}
              </Disclosure.Panel>
            </>
          )}
        </Disclosure> 
     </div>
  )
}
