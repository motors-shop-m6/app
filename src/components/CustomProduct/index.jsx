import { Box, Container } from "@mui/material"

import teste  from "../../assets/motors_shop_logo.png"

function CustomProduct(props){

    return(
        <Box sx={{
            display: 'flex', 
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height:'70vh',
            width: '320px',
            margin: '0 auto',
            padding: 0,
        }} >


            <Container sx={{
                backgroundColor: '#E9ECEF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '30vh'
            }} >
                <img src={teste}></img>
            </Container>

            <Container sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                padding: 0,
                height: '7vh',
                alignItems: 'center',
                fontSize: '16px',
                fontFamily: 'fontFamily',
                fontWeight: 600,
                color: 'grey.1'
            }}>

                <p>Nome do veículo aqui</p>

            </Container>

            <Container sx={{
                display: 'flex',
                justifyContent: 'flex-start',
                padding: 0,
                alignItems: 'center',
                height: '7vh',
                width: '320px',
                fontSize: '14px',
                fontFamily: 'Inter',
                fontWeight: 400,
                color: 'grey.2',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                msTextOverflow: 'ellipsis'
            }}>
                Sunt aliqua Lorem nulla commodo ullamco deserunt velit qui id dolor cillum sunt officia ex. Excepteur elit minim commodo dolore incididunt proident deserunt velit velit.
            </Container>

            <Container sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                height: '10vh',
                padding: 0,
            }}>

                <Container sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginLeft: '10px',
                    padding: 0,
                    borderRadius: '20px',
                    width: '35px',
                    height: '30px',
                    backgroundColor: 'brand.1',
                    fontFamily: 'Inter',
                    color: 'grey.whiteFixed'

                }}>
                    JM
                </Container>

                <Container sx={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    color: 'grey.2',
                }}>
                    Jhon Muller
                </Container>


            </Container>

            <Container sx={{
                display: 'flex',
                height: '10vh',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 0,
            }}>

               <Container sx={{
                display: 'flex',
                justifyContent: 'space-around',
                padding: 0,
                alignItems: 'center',
                
                height: '45px'
               }}>
                    <Container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '4px',
                        height: '32px',
                        width: '50px',
                        padding: 0,
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: '14px',
                        backgroundColor: 'brand.4',
                        color: 'brand.1'
                    }}>
                        0 KM
                    </Container>

                    <Container sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '4px',
                        height: '32px',
                        width: '50px',
                        padding: 0,
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: '14px',
                        backgroundColor: 'brand.4',
                        color: 'brand.1'
                    }}>
                        2019
                    </Container>

               </Container>

                <Container sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    height: '45px',
                    fontFamily: 'fontFamily',
                    fontWeight: 500,
                    fontSize: '16px',
                    padding: 0,
                }}>
                    R$ 00.000,00
                </Container>

            </Container>

        </Box>
    )
}

export default CustomProduct;