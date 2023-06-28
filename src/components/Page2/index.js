
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

export default function Page2(){

    const navigate = useNavigate();

    const toPage1=()=>{
        navigate('/');
    }

    return(
        <div className="flex flex-col  p-[20px]" >

           <div className="flex flex-row justify-between 'mt-[20px] mx-[30px]">
                
                    <img src={process.env.PUBLIC_URL + '/dalp_logo.png'} alt='header-logo' />

                
                <Button onClick={toPage1} variant="outlined" style={{color:'#7E96EA'}}>Back</Button>

           </div>   
               
        </div>

    ) 

}