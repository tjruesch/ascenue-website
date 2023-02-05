import Image from 'next/image'

import backgroundImage from '@/images/background-auth.jpg'
import { MessageField } from '@/components/Fields'
import { Button } from '@/components/Button'

export function ContactLayout({ children }) {
  return (
    <>
      <div className="relative flex min-h-full justify-center md:px-12 lg:px-0">
        <div className="relative z-10 flex flex-1 flex-col bg-white py-10 px-4 shadow-2xl sm:justify-center md:flex-none md:px-28">
          <div className="mx-auto w-full max-w-md sm:px-4 md:w-96 md:max-w-sm md:px-0">
            {children}
          </div>
        </div>
        <div className="hidden sm:contents lg:relative lg:block lg:flex-1">
          <Image
            className="absolute inset-0 h-full w-full object-cover"
            src={backgroundImage}
            alt=""
            unoptimized
          />
          <div className='w-1/2 h-1/2 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 absolute bg-white rounded p-10'>
            <MessageField 
              label="Nachricht"
              placeholder="Sagen Sie uns, was wir für Sie tun können."
              id="message"
              name="message"
              rows={12}
              required
            />
            <div className='flex items-center justify-end mt-8'>
              <Button href="/kontakt" color="yellow">
                <span>
                  Absenden
                </span>
              </Button>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}
