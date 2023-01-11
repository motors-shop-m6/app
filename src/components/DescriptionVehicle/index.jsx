import { Stack } from "@mui/material";

function DescriptionVehicle(props){


    return(
        <>
            <Stack
                sx={{
                    // width: '270px',
                    width: '90%',
                    fontFamily: '',
                    fontWeight: 600,
                    fontSize: '20px',
                    lineHeight: '25px',
                    
                }}
            >
                Descrição
            </Stack>

            <Stack
                sx={{
                    // width: '270px',
                    width: '90%',
                    height: '225px',

                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '16px',
                    lineHeight: '28px',
                    color: 'grey.2'
                }}
            >
                            {props.description} {/*Descrição do anúncio */}
                            
            </Stack>
        </>
    )
}

export default DescriptionVehicle;