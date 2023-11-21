import React from 'react'
import {Home} from '../Components/MainPage/Home'
import FlashDeals from '../Components/flashDeals/FlashDeals'

export const Pages = ({ productItems }) => {
  return (
    <div>
      {<Home />}
      < FlashDeals productItems ={ productItems }/>
    </div>
  )
}
