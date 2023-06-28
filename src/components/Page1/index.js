import Button from '@mui/material/Button';
// import { SearchIcon } from '@heroicons/react/solid';



export default function Page1(){

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
                                placeholder="Search"
                            />
                    
                        
                    </div>
                   

                        <Button variant="contained" style={{backgroundColor:'#7E96EA'}}>Get Image</Button>
                    

                    
                </div>
            </div>


        </div>

    ) 

}