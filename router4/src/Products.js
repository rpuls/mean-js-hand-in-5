import React, { Component } from 'react';
import BookStore from './models/BookStore'

const AddBook = () => {
    BookStore.addBook({ title: "lorte bog", info: "den er dårlig", moreInfo: "" })
    return null
}

const Products = () => (
  <div>
    <h1>Products</h1>
  </div>
)



export default Products;