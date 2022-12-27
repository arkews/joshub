import { FC } from 'react'
import NextLink from 'next/link'

const HeaderSection: FC = () => {
  return (
    <div className='isolate bg-white'>
      <div className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'>
        <svg
          className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
          viewBox='0 0 1155 678'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
            fillOpacity='.3'
            d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
          />
          <defs>
            <linearGradient
              id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
              x1='1155.49'
              x2='-78.208'
              y1='.177'
              y2='474.645'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#9089FC' />
              <stop offset={1} stopColor='#FF80B5' />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <main>
        <div
          className='
          mx-auto max-w-screen-xl lg:py-16 lg:px-12'
        >
          <div className='hidden sm:mb-8 sm:flex sm:justify-center'>
            <div className='relative overflow-hidden rounded-full py-1.5 px-4 text-sm leading-6 ring-1 ring-gray-900/10 hover:ring-gray-900/20'>
              <span className='text-gray-600'>
                Carácteristicas de nuestra version preeliminar.{' '}
                <a href='#' className='font-semibold text-indigo-600'>
                  <span className='absolute inset-0' aria-hidden='true' />
                  Leer más <span aria-hidden='true'>&rarr;</span>
                </a>
              </span>
            </div>
          </div>

          <div>
            <h1 className='text-4xl font-bold tracking-tight sm:text-center sm:text-6xl'>
              Simplifica la administración de tu bar
            </h1>
            <p className='mt-6 text-lg leading-8 text-gray-600 sm:text-center'>
              Simplifica la administración de tu bar con nuestro software de
              gestión de inventario y pedidos en línea. Mantén un inventario
              preciso, realiza seguimiento de tus ventas y costos en tiempo real
              y toma decisiones informadas para mejorar el rendimiento de tu
              negocio.
            </p>
            <div className='mt-8 flex gap-x-4 sm:justify-center'>
              <NextLink
                href='/auth/sign-up'
                className='text-base px-6 py-3.5 font-medium text-center text-indigo-900 bg-indigo-100 rounded-full hover:bg-indigo-200 border border-transparent'
              >
                Comenzar ahora
                <span className='text-blue-900 ml-2' aria-hidden='true'>
                  &rarr;
                </span>
              </NextLink>
            </div>
          </div>

          <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
            <svg
              className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]'
              viewBox='0 0 1155 678'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill='url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)'
                fillOpacity='.3'
                d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
              />
              <defs>
                <linearGradient
                  id='ecb5b0c9-546c-4772-8c71-4d3f06d544bc'
                  x1='1155.49'
                  x2='-78.208'
                  y1='.177'
                  y2='474.645'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#9089FC' />
                  <stop offset={1} stopColor='#FF80B5' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HeaderSection
