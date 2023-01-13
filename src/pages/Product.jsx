import CustomHeader from "../components/CustomHeader";
import { Stack } from "@mui/material";
import CustomFooter from "../components/CustomFooter";
import Reviews from "../components/Reviews";
import ReviewsAdd from "../components/ReviewsAdd";
import Merdes from "../assets/mercedes.svg"
import GridPicturesProduct from "../components/GridPicturesProduct";
import DataProductAds from "../components/DataProductAds";
import DescriptionVehicle from "../components/DescriptionVehicle";
import InfoUserAds from "../components/InfoUserAds";
import { useContext } from "react";
import { UserContext } from "../contexts/user/UserContext";

function Product(){

    const dataProduct = JSON.parse(localStorage.getItem('@motors_shop:dataProduct'))
    const { user } = useContext(UserContext);    

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
                  width: '100%',
                }}
            >

                <Stack
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: {
                            xs: 300,
                            sm: '100%',
                            md: '100%',
                            lg: '70%',
                        },
                        height: '355px',
                        
                        backgroundColor: 'grey.10',
                        borderRadius: '4px'
                    }}
                >
                    <img 
                        style={{
                            width: '100%'
                        }}
                        src={dataProduct.urlImg} 
                    /> 
                        {/* url da imagem principal. (coverImage) */}
                </Stack>

                <Stack
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'space-evenly',
                        width: {
                            xs: 300,
                            sm: '100%',
                            md: '100%',
                            lg: '70%',
                        },
                        height: '326.91px',
                        borderRadius: '4px',
                        backgroundColor: 'grey.10'
                    }}
                >
                    <DataProductAds
                        nameVehicle={dataProduct.nameVehicle}
                        year={dataProduct.year}
                        km={dataProduct.km}
                        price={dataProduct.price}
                    />
                </Stack>


            </Stack>
                <Stack
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        alignItems: 'center',
                        width: {
                            xs: '300px',
                            sm: '80%',
                            md: '75%',
                            lg: '59%'
                        },
                        height: '325px',
                        marginTop: '10px',
                        borderRadius: '4px',
                        backgroundColor: 'grey.whiteFixed',
                    }}
                >
                    <DescriptionVehicle
                        descriptionVehicle={dataProduct.description}
                    />
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
                        width: {
                            xs: '300px',
                            sm: '80%',
                            md: '75%',
                            lg: '59%'
                        },
                    }}
                >
                    <Stack
                        sx={{
                            fontFamily: '',
                            fontWeight: 600,
                            fontSize: '20px',
                            lineHeight: '25px',

                            width: {
                                xs: '300px',
                                sm: '80%',
                                md: '75%',
                                lg: '80%'
                            },
                            
                        }}
                    >
                        Fotos
                    </Stack>

                    <GridPicturesProduct
                        pictureOne={dataProduct.urlImg}
                        pictureTwo={dataProduct.urlImg}
                        pictureThree={dataProduct.urlImg}
                    />

                    <GridPicturesProduct
                        pictureOne={dataProduct.urlImg}
                        pictureTwo={dataProduct.urlImg}
                        pictureThree={dataProduct.urlImg}
                    />

                </Stack>

            <Stack
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-evenly',

                    width: {
                        xs: '300px',
                        sm: '80%',
                        md: '75%',
                        lg: '59%'
                    },
                    height: '398px',
                    marginTop: '10px',
                    backgroundColor: 'grey.whiteFixed',
                    borderRadius: '4px',
                }}
            >

                <InfoUserAds
                    advertiser={dataProduct.nameSeller}
                    descAdvertiser={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's"}
                />
                
            </Stack>

            <Stack
                sx={{
                    alignItems: 'center',
                    width: {
                        xs: '300px',
                        sm: '80%',
                        md: '75%',
                        lg: '59%'
                    },
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
                        width: '90%'
                    }}
                >
                    Comentários
                </Stack>

                <Reviews 
                    name={"Fulano Cliente"} 
                    review={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                />

                <Reviews 
                    name={"Ciclano Cliente"} 
                    review={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                />

                <Reviews 
                    name={"Deutrano Cliente"} 
                    review={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."} 
                />
                
            </Stack>

            <Stack
                sx={{
                    alignItems: 'center',
                    width: {
                        xs: '300px',
                        sm: '80%',
                        md: '75%',
                        lg: '59%'
                    },
                    height: '350px',
                    backgroundColor: 'grey.10',
                    marginTop: '10px',
                    borderRadius: '4px',
                }}
            >
                <ReviewsAdd user={`${user.name}`} />
            </Stack>

            <CustomFooter/>
        </Stack>
    )
}

export default Product;