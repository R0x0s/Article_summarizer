import { useState, useEffect } from 'react';

import {copy, linkIcon, loader, tick } from '../assets'
import { Input } from 'postcss';


const Demo = () => {

  const [artile, setArticle] = useState({
    url:'',
    summary: '',
  })

  const handleSubmit = async (e) => {
    alert('Submitted')
  }

  return (
    <section className="mt-16 w-full max-w-xl;">

      <div className="flex flex-col w-full gap-2">
        <form 
        className="relative flex
        justify-center items-center"
        onsubmit={handleSubmit}
        >
          <img 
          src={linkIcon}
          alt="link Icon"
          className="absolute left-0 my-2
          ml-3 w-5" />

          <input
          type="url"
          placeholder="Enter URL"
          value={setArticle.url}
          onChange={(e) => setArticle ({ ... 
          artile, url: e.target.value})} 
          required
          className="url_input peer"
          />

          <button 
          type="submit"
          className="submit_btn
          peer-focus:border-gray-700
          peer-focus:text-gray-700">

            🤞
          </button>
        </form>
        {/* Browse URL History */}
      </div>

      {/* Display Results */}
     </section>
  )
}

export default Demo