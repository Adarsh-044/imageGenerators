import React, { useState } from 'react'
import SearchBar from './component/SearchBar'
import ImageList from './component/ImageList'
import searchImages from './api'


const App = () => {
      const [images, setImages] = useState([]);
      const createApiCall = async (term) => {
            const res = await searchImages(term);
            setImages(res);
      }
      return (
            <div >
                  <SearchBar onSubmit={createApiCall} />
                  <div className='container text-center'>
                        <ImageList images={images} />
                  </div>
            </div>
      )
}

export default App