import React from 'react'
import BookList from './BookList';
import './Bookdesign.css';
 const Home = () => {
  return (
    <>
    <h1 className='h1' >Amazon Books - Best Sellers</h1>
    <div className='display'>
      
      {BookList}
    </div>
    </>
  
  )
}

export  default Home;