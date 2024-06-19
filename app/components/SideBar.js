'use client'
const apiUrl = process.env.NEXT_PUBLIC_API_URL

import Link from "next/link";
import { useEffect, useState } from "react";

// const getData = async () => {
//   const response = await fetch('http://localhost:3000/api/entries/books', { cache: 'no-store' })
//   if (!response.ok) {
//     throw new Error('Failed to fetch books');
//   }
//   return response.json()
// } 


const SideBar = () => {

  const [books, setBooks] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${apiUrl}/api/entries/books`, {cache: 'no-store'})
      if (!response.ok) {
        throw new Error('Failed to fetch books')
      }
      const data = await response.json()
      setBooks(
        data.sort((a, b) => {
          if(a.book < b.book) {
            return -1
          }
          if (a.book > b.book) {
            return 1
          }
          return 0
        })
      )
    }
    fetchData()
  }, [])


  return (
    <div className="bg-green-900">
      <hr className="border border-white mx-4"></hr>
      <div className=" mx-5 mb-2 mt-3 ml-8">
        <h1 className="hover:text-yellow-300 font-roboto text-white font-medium text-2xl ">Books</h1>
      </div>
      <ul>
        {books.map((book) => (
          <li key={book.book} className=" mx-3 px-7 py-1  rounded">
            <Link href={`/books/${book.book}`}>
              <h1 className="hover:text-yellow-300 text-white font-medium text-lg">
                {book.book}
              </h1>
            </Link>
          </li>
        ))}
        {/* {books.map((book) => (
          <li key={book.book}>{book.book}</li>
        ))} */}
      </ul>
    </div>
  )
};

export default SideBar;
