import React, { useState, useEffect } from 'react'
import BookCard from '../books/BookCard'

const categories = ['Choose genre', 'Business', 'Fiction', 'Horror', 'Adventure'];

const TopSellers = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Choose genre');

  useEffect(() => {
    fetch('books.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  const filteredBooks = selectedCategory === 'Choose genre' ? (
    books
  ) : (
    books.filter(book => book.category === selectedCategory.toLowerCase())
  );

  console.log(filteredBooks);

  return (
    <div className="py-10">
      <h2 className="text-3xl font-semibold mb-6">Top Sellers</h2>
      {/* category filter */}
      <div className="mb-8 flex items-center">
        <select 
          name="category" 
          id="category" 
          className="border bg-[#EAEAEA] border-gray-300 rounded-md px-4 py-2 focus:outline-none"
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {
            categories.map((category, index) => (
              <option key={index} value={category}>{category}</option>
            ))
          }
        </select>
      </div>
      {
        filteredBooks.map((book, index) => (
          <BookCard key={index} book={book} />
        ))
      }
    </div>
  )
}

export default TopSellers