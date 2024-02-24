import Board from '@/components/ui/Board'
import { Metadata } from 'next'
import React from 'react'

export const metadata:Metadata = {
  title:"Sketch Book",
  description:"Sketch Book"
}

export default function Home() {
  return (
    <div
    className=''
    >
      <Board />
    </div>
  )
}
