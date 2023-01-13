import { Stack, Avatar } from "@mui/material";
import TextField from '@mui/material/TextField';
import { stringAvatar } from "../../utils";

function ReviewsAdd(props) {

    return (
        <>
            <Stack
                sx={{
                    width: '90%',
                    margin: '30px 0 30px 0',
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <Avatar
                    {...stringAvatar(`${props.user}`)}
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
                    {props.user}
                </Stack>
            </Stack>

            <TextField
                label="Comentário"
                multiline
                rows={4}
                sx={{
                    width: '90%'
                }}
            />

            <Stack
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '108px',
                    height: '38px',
                    marginTop: '30px',
                    borderRadius: '4px',
                    border: '1.5px solid #4529E6',
                    backgroundColor: 'brand.1',

                    fontFamily: 'Inter',
                    fontWeight: 600,
                    fontSize: '14px',
                    color: 'grey.whiteFixed',
                    '&:hover':{
                        cursor: 'pointer'
                    }
                }}
            >
                Comentar
            </Stack>
           
        </>
    )
}

export default ReviewsAdd;