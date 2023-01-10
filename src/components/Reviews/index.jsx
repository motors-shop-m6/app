import { Stack, Avatar } from "@mui/material";
import { stringAvatar } from "../../utils";

function Reviews(props) {

    return(
        <Stack
            sx={{
                marginTop: '30px',
                width: '280px',
            }}
        >

            <Stack
                sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Avatar
                    {...stringAvatar(`${props.name}`)}
                    sx={{
                        backgroundColor: "brand.1",
                        fontFamily: "Inter",
                        color: "grey.whiteFixed",
                    }}
                />

                <Stack
                    sx={{
                        marginLeft: '10px',
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: '14px',
                        lineHeight: '24px',
                    }}
                >
                    {props.name}
                </Stack>
            </Stack>

            <Stack
                sx={{
                    marginTop: '10px',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '14px',
                    lineHeight: '24px',
                    textAlign: 'justify',
                    color: 'grey.2'
                }}
            >
                {props.review}
            </Stack>
            
        </Stack>
    )
}

export default Reviews;