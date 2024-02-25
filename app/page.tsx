"use client"

import Board from '@/components/ui/Board'
import React from 'react'
import { Provider } from "react-redux";
import { store } from "@/store/store";
import ToolBox from "@/components/ui/ToolBox";
import MenuBar from "@/components/shared/MenuBar";
export default function Home() {
  return (
    <div
    className=''
    >
      <>
        <Provider store={store} >
          <MenuBar/>
          <ToolBox />
          <Board />
        </Provider>
      </>
    </div>
  )
}
