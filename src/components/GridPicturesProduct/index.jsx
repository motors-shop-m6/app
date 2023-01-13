import { Stack } from "@mui/material";
import Merdes from "../../assets/mercedes.svg"

function GridPicturesProduct (props){


    return(
        <Stack
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent:'space-between',
                width: {
                    xs: '280px',
                    sm: '80%',
                    md: '75%',
                    lg: '80%'
                },
                marginTop: '10px',
            }}
        >

            <Stack
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'grey.7',
                    height: '90px',
                    width: {
                        xs: '90px',
                        sm: '30%',
                        md: '25%',
                        lg: '25%',
                    },

                    borderRadius: '4px',
                }}
            >
                <img 
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    
                    src={props.pictureOne}
                />
            </Stack>

            <Stack
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'grey.7',
                    width: {
                        xs: '90px',
                        sm: '30%',
                        md: '25%',
                        lg: '25%',
                    },
                    height: '90px',
                    borderRadius: '4px',
                }}
            >
                <img 
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    
                    src={props.pictureTwo}
                />
            </Stack>

            <Stack
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'grey.7',
                    width: {
                        xs: '90px',
                        sm: '30%',
                        md: '25%',
                        lg: '25%',
                    },
                    height: '90px',
                    borderRadius: '4px',
                }}
            >
                <img 
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                    
                    src={props.pictureThree}
                />
            </Stack>

        </Stack>
    )
}

export default GridPicturesProduct;