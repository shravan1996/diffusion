
import Button from '@mui/material/Button';
import { useNavigate, useLocation } from 'react-router-dom';
//import { myImage } from './Page1/index.js';

export default function Page2(){
    const navigate = useNavigate();
   // console.log(props,"from props");
    //const {state} = location;
    //console.log(props.state.imageSrc, "from state.imageSrc");
    //const {imageSrc} = props.state.imageSrc;
    
    const location = useLocation();
    const state1 = location.state;
    console.log(location.state,"second-page");
    const toPage1=()=>{
        navigate('/');
    }     

    return(
        <div className="flex flex-col  p-[20px]" >

           <div className="flex flex-row justify-between 'mt-[20px] mx-[30px]">
                
                    <img src={process.env.PUBLIC_URL + '/dalp_logo.png'} alt='header-logo' />

                
                <Button onClick={toPage1} variant="outlined" style={{color:'#7E96EA'}}>Back</Button>

           </div>  
           <div className= "flex justify-center align-center mt-[100px]">
		 <img src= {state1} className='h-[500px] w-[700px]' alt='Received Image' />
	   </div>
        </div>

    ) 

}
