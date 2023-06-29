
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
//import { myImage } from './Page1/index.js';

export default function Page2(props){

    const navigate = useNavigate();
    const myImage = props;
    const toPage1=()=>{
        navigate('/');
    }     

    return(
        <div className="flex flex-col  p-[20px]" >

           <div className="flex flex-row justify-between 'mt-[20px] mx-[30px]">
                
                    <img src={process.env.PUBLIC_URL + '/dalp_logo.png'} alt='header-logo' />

                
                <Button onClick={toPage1} variant="outlined" style={{color:'#7E96EA'}}>Back</Button>

           </div>  
           <div>
		 <img src= { myImage } alt='My Image' />
	   </div>
        </div>

    ) 

}
