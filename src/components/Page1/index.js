import Button from '@mui/material/Button';
// import { SearchIcon } from '@heroicons/react/solid';
import React, { useState, useEffect } from 'react';
//import { useNavigate } from 'react-router-dom';


export default function Page1(){
   
    //const navigate = useNavigate();
    const [query, setQuery] = useState('');
    const [imageSrc, setImageSrc] = useState('');
    
    const handleSearch = () => {
      //navigate('/page-2');
      fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      })
        .then((response) => response.blob())
        .then((blob) => {
          const src = URL.createObjectURL(blob);
          setImageSrc(src);
          // Handle the response data from the Flask backend
          console.log(data);
        })
        .catch((error) => {
          // Handle any errors
          console.error(error);
        });
    };     

    return(
        <div className="flex flex-col p-[20px]" >

            <div className='mt-[20px] mx-[30px]'>
                <img src={process.env.PUBLIC_URL + '/dalp_logo.png'} alt='header-logo' />
            </div> 

            <div className='flex justify-center items-center mt-[170px] flex-col '>
                <h1 className='text-[70px] mb-[15px]'>Generative AI for Design</h1>
                <p className='text-2xl mb-[25px]' >Please specify a prompt parameter</p>
                <div className='flex flex-row'>

                    <div className="mr-[10px] flex border rounded-md">
                        
                            <input
                                className="w-[800px] border-[#080707]  pl-3 py-2 pr-10 border-[1px] rounded-lg  focus:outline-none"
                                type="text"
				                        value={query}
				                        onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search"
                            />                       
                    </div>
                   
                        <Button  onClick={handleSearch} variant="contained" style={{backgroundColor:'#7E96EA'}}>Get Image</Button> 
                </div>
            </div>
            <div>
                <img src={MyImage} alt="My Image" />
            </div>

        </div>

    ) 

}
