import { Stack } from "@mui/material";


function GridPicturesProduct (props){


    return(
        <Stack
            sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent:'space-between',
                width: '280px',
                marginTop: '10px',
            }}
        >

            <Stack
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'grey.7',
                    width: '90px',
                    height: '90px',
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
                    width: '90px',
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
                    width: '90px',
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