import React from 'react'
import Books from './Books'
import './Bookdesign.css'
const BookList=Books.map((Book,id)=>
     <div key={id} className='grid'>
            <h5 className='h5'>#{Book.id}</h5>
            <img className='img' src={Book.image} alt="Book"/>
            <h3 className='h3'>{Book.title}</h3>
            <h4 className='h4'> {Book.author}</h4>
        </div>
);
   
export default BookList;
