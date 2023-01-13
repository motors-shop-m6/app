import { stringAvatar } from "../../utils";
import { Stack, Avatar } from "@mui/material";
import { useNavigate } from "react-router-dom";

function InfoUserAds(props){

    const navigate = useNavigate()

    return(
        <>
            <Avatar
                {...stringAvatar(`${props.advertiser}`)}
                sx={{
                    backgroundColor: "brand.1",
                    fontFamily: "Inter",
                    color: "grey.whiteFixed",
                }}
            />

            <Stack
                sx={{
                    fontFamily: '',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '25px',
                    color: 'grey.1',
                }}
            >
                {props.advertiser} {/*Nome do anunciante.*/ }
            </Stack>


            <Stack
                sx={{
                    width: '280px',
                    fontSize: '16px',
                    lineHeight: '28px',
                    fontWeight: 400,
                    fontFamily: 'Inter',
                    color: 'grey.2',
                }}
            >
                {props.descAdvertiser} {/*Descrição do anunciante.*/ }
                
            </Stack>

            <Stack
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '206px',
                    height: '48px',
                    backgroundColor: 'grey.0',
                    borderRadius: '4px',
                    color: 'grey.whiteFixed',

                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: '16px',

                    '&:hover':{
                        cursor: 'pointer'
                    }
                    
                }}

                onClick={()=>{
                    navigate("/")
                }}

            >
                Ver todos os anúncios
            </Stack>
        </>
    )
}

export default InfoUserAds;