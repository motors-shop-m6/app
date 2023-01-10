import CustomHeader from "../components/CustomHeader";

import { Stack, Avatar } from "@mui/material";
import { stringAvatar } from "../utils";
import CustomFooter from "../components/CustomFooter";
import Reviews from "../components/Reviews";
import ReviewsAdd from "../components/ReviewsAdd";
import Merdes from "../assets/mercedes.svg"
import GridPicturesProduct from "../components/GridPicturesProduct";

function Product(props){

   
    
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
                    <img src={props.urlImg} /> {/*url da imagem principal.*/}
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
                        {props.nameVehicle} {/*Nome do veículo.*/}
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
                            {props.year} {/*Ano do automóvel.*/}
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
                            {props.km} KM {/*Quilômetros rodado.*/}
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
                        R$ {props.price} {/*Preço do automóvel*/}
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
                        {props.description} {/*Descrição do anúncio*/}
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

                    <GridPicturesProduct
                        pictureOne={props.pic1}
                        pictureTwo={props.pic2}
                        pictureThree={props.pic3}
                    />

                    <GridPicturesProduct
                        pictureOne={props.pic4}
                        pictureTwo={props.pic5}
                        pictureThree={props.pic6}
                    />

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
                        
                    }}
                >
                    Ver todos os anúncios
                </Stack>
            </Stack>

            <Stack
                sx={{
                    alignItems: 'center',
                    width: '300px',
                    height: '850px',
                    backgroundColor: 'grey.10',
                    marginTop: '10px',
                    borderRadius: '4px',
                    overflow: 'auto',
                }}
            >
                <Stack
                    sx={{
                        fontFamily: '',
                        fontWeight: 600,
                        fontSize: '20px',
                        lineHeight: '25px',

                        marginTop: '30px',
                        width: '280px',
                    }}
                >
                    Comentários
                </Stack>

                <Reviews 
                    name={"Jhon Muller"} 
                    review={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                />

                <Reviews 
                    name={"Jhon Muller"} 
                    review={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                />

                <Reviews 
                    name={"Jhon Muller"} 
                    review={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                />
                
            </Stack>

            <Stack
                sx={{
                    alignItems: 'center',
                    width: '300px',
                    height: '350px',
                    backgroundColor: 'grey.10',
                    marginTop: '10px',
                    borderRadius: '4px',
                }}
            >
                <ReviewsAdd user={"Jhon Muller"}   />
            </Stack>

            <CustomFooter/>
        </Stack>
    )
}

export default Product;