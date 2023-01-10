import CustomHeader from "../components/CustomHeader";

import { Stack, Avatar } from "@mui/material";
import { stringAvatar } from "../utils";
import CustomFooter from "../components/CustomFooter";


function Product(){

    
    return(
        <Stack
            sx={{
                backgroundColor: 'grey.8',
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <CustomHeader/>
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={4}
                sx={{
                  bgcolor: "brand.2",
                  background:
                    "linear-gradient(to bottom, #5126EA 0%, #5126EA 80%, #FFFFFF 80%, #FFFFFF 100%)",
                  p: {
                    xs: 3,
                    sm: 7,
                    md: 13,
                  },
                }}
            >

                <Stack
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '300px',
                        height: '355px',
                        
                        backgroundColor: 'grey.10',
                        borderRadius: '4px'
                    }}
                >
                    Foto principal
                </Stack>

                <Stack
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        width: '300px',
                        height: '326.91px',
                        borderRadius: '4px',
                        backgroundColor: 'grey.10'
                    }}
                >

                    <Stack
                        sx={{
                            width: '280px',
                            fontWeight: 600,
                            fontSize: '20px',
                            fontFamily: ''
                        }}
                    >
                        Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200 
                    </Stack>

                    <Stack 
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            width: '280px'
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
                            2013
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
                            0 KM
                        </Stack>
                    </Stack>

                    <Stack
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            width: '280px',

                            fontFamily: '',
                            fontWeight: 500,
                            fontSize: '16px',
                            lineHeight: '20px',

                        }}
                    >
                        R$ 00.000,00
                    </Stack>

                    <Stack 
                        sx={{
                            width:'280px',
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

                </Stack>


            </Stack>
                <Stack
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        width: '300px',
                        height: '325px',
                        marginTop: '10px',
                        borderRadius: '4px',
                        backgroundColor: 'grey.whiteFixed',
                    }}
                >
                    <Stack
                        sx={{
                            width: '270px',
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
                            width: '270px',
                            height: '225px',

                            fontFamily: 'Inter',
                            fontWeight: 400,
                            fontSize: '16px',
                            lineHeight: '28px',
                            color: 'grey.2'
                        }}
                    >
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </Stack>
                </Stack>

                <Stack
                    sx={{

                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: '4px',
                        justifyContent: 'center',
                        alignItems: 'center',

                        marginTop: '10px',
                        backgroundColor: 'grey.whiteFixed',
                        height: '359px',
                        width: '300px',
                    }}
                >
                    <Stack
                        sx={{
                            fontFamily: '',
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '25px',

                            width: '280px'
                        }}
                    >
                        Fotos
                    </Stack>

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
                            Foto
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
                            Foto
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
                            Foto
                        </Stack>
                    </Stack>

                    <Stack
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            justifyContent:'space-between',
                            marginTop: '10px',
                            width: '280px'
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
                            Foto
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
                            Foto
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
                            Foto
                        </Stack>
                    </Stack>

                </Stack>

            <Stack
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',
                    
                    width: '300px',
                    height: '398px',
                    marginTop: '10px',
                    backgroundColor: 'grey.whiteFixed',
                    borderRadius: '4px',
                }}
            >


                <Avatar
                    {...stringAvatar('Samuel Leão')}
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
                    Samuel Leão
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
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
                        
                    }}
                >
                    Ver todos os anúncios
                </Stack>
            </Stack>

            <CustomFooter/>
        </Stack>
    )
}

export default Product;