"use client"
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { useEffect, useState } from 'react'

import { ThemeButton } from '@/components/buttons/ThemeButton'
import { ListProducts } from '@/components/ListProducts'
import { IProduct } from '@/types';
import { Sidebar } from '@/components/Sidebar'
import { ConfirmationCard } from '@/components/Alert/Confirmation'
import { ProductForm } from '@/components/modals/ProductForm'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
 
 const [productsState, setProductsState] = useState([])
 const [modal , setModal] = useState(false)
useEffect(() => {
  fetch('http://127.0.0.1:4100/api/v1/products'
  , {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',

      }
      })
  .then((res) =>  res.json())
  .then((data) => setProductsState(data))
  .catch((err) => console.log(err))
}, [])

  return (
    <main className="dark h-screen p-4">
  
      <div className='grid grid-cols-12 gap-4  h-full overflow-hidden'>
          <div className='col-span-3 max-w-[300px]'>
          <Sidebar />
          </div>
          <div className='col-span-8'>
          <div className="flex justify-between items-center mb-5">
            <h1 className="text-2xl font-bold">Todos</h1>
            <button onClick={() => setModal(true)} className="bg-green-500 text-white px-4 py-2 rounded-md">Adicionar</button>
          </div>

            <ListProducts products={productsState} />
          </div>
          <ProductForm
          title="ToDo"
          isOpen={modal}
          onClose={() => setModal(false)}
           />
      </div>
   
    </main>
  )
}

