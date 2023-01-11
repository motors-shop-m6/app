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
                        src={props.urlImg} 
                    /> 
                        {/* url da imagem principal. */}
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
                        nameVehicle={"Mercedes Benz A 200 CGI ADVANCE SEDAN Mercedes Benz A 200"}
                        year={2013}
                        km={0}
                        price={"00.000,00"}
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
                        description={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
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

                <InfoUserAds
                    advertiser={"Jhon Muller"}
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
                <ReviewsAdd user={"Jhon Muller"} />
            </Stack>

            <CustomFooter/>
        </Stack>
    )
}

export default Product;