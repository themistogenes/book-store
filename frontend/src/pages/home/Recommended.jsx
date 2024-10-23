import React, {useState, useEffect} from 'react'
import BookCard from '../books/BookCard'

// Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Swiper modules
import { Pagination, Navigation } from 'swiper/modules'
// Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const Recommended = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('books.json')
      .then(res => res.json())
      .then(data => setBooks(data))
  }, [])

  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">Recommended</h2>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
            640: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 40,
            },
            1024: {
                slidesPerView: 2,
                spaceBetween: 50,
            },
            1400: {
                slidesPerView: 3,
                spaceBetween: 50,
            }
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {
          books.length > 0 && books.slice(8, 18).map((book, index) => (
            <SwiperSlide key={index}>
              <BookCard book={book} />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default Recommended