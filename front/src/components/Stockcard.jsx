import React, { useState } from 'react';
import axios from 'axios';

const Stockcard = ({ id, company, price, stname }) => {

    const [error, setError] = useState('');

    const buystocksfn = async(e) =>
    {
        console.log('test');
        
    }

    return (
        <div className="bg-gray-800 border-1 w-80  rounded-lg p-4 mb-4 shadow-md hover:scale-110 flex flex-col">
          <div className="flex justify-between mb-4">
    
            <div className="font-bold text-xl">{company}</div>
    
            <div className="font-bold text-lg text-purple-600">{stname}</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold">{price} ß</div>
            <button onClick={buystocksfn} className="mt-3 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
    
    
          
              Buy Now
            </button>
            {error && <div className="text-red-500 mt-2">{error}</div>}
          </div>
        </div>
      
      );
}

export default Stockcard