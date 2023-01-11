import { Stack } from "@mui/material";

function DataProductAds(props){

    return(
        <>
            <Stack
                sx={{
                    width: '90%',
                    fontWeight: 600,
                    fontSize: '20px',
                    fontFamily: ''
                }}
            >
                {props.nameVehicle} {/*Nome do veículo*/}   
            </Stack>

            <Stack 
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    // width: '280px'
                    width: '90%',
                }}
            >
                <Stack
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50px',
                        height: '32px',
                        backgroundColor:'brand.4',

                        fontSize: '14px',
                        fontWeight: 500,
                        fontFamily: 'Inter',
                        lineHeight: '24px',
                        color: 'brand.1',
                    }}
                >
                    {props.year} {/*Ano do automóvel. */}  
                </Stack>

                <Stack
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '50px',
                        height: '32px',
                        marginLeft: '10px',
                        backgroundColor:'brand.4',

                        fontSize: '14px',
                        fontWeight: 500,
                        fontFamily: 'Inter',
                        lineHeight: '24px',
                        color: 'brand.1',

                    }}
                >
                    {props.km} KM {/*Quilômetros rodado. */}
                </Stack>
            </Stack>

                    <Stack
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            width: '90%',

                            fontFamily: '',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '20px',

                        }}
                    >
                        R$ {props.price} {/*Preço do automóvel */}   
                    </Stack>

            <Stack 
                sx={{
                    width:'90%',
                    justifyContent:'flex-start',
                }}
            >
                <Stack 
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100px',
                        height: '38px',
                        backgroundColor: 'brand.1',
                        borderRadius: '4px',

                        fontFamily: 'Inter',
                        fontWeight: 600,
                        fontSize: '14px',
                        color: 'grey.whiteFixed',
                    }}
                >
                    Comprar
                </Stack>
            </Stack>
        </>
    )
}

export default DataProductAds;