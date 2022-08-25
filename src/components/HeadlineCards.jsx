import React from 'react'
import HeadlineCardsItem from './HeadlineCardsItem'

const HeadlineCards = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
      <HeadlineCardsItem
      title="Sun's Out, BOGO's Out"
      sub='Through 8/26'
      img='https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=format&fit=crop&w=800&q=60' 
      />
      <HeadlineCardsItem
      title="New Restaurants"
      sub='Added Daily'
      img='https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600' 
      />
      <HeadlineCardsItem
      title="Delivering Deserts Too"
      sub='Tasty Treats'
      img='https://images.pexels.com/photos/2373520/pexels-photo-2373520.jpeg?auto=compress&cs=tinysrgb&w=600' 
      />
    </div>
  )
}

export default HeadlineCards