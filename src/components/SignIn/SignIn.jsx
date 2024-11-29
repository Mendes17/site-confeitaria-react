import { SignIn } from '@clerk/clerk-react'
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import styled from 'styled-components'

const StyledSignIn = styled.div`

    .cl-signIn-start {
        width: 500px;
        height: 500px;
        font-size: 1.6rem;
    }
    
`


export default function SignInPage() {
    return (
        <>
            <Container fluid>
                <Box style={{width: '100%', display: 'flex', justifyContent: 'center', height: '100%', alignItems: 'center'}}>
                    <StyledSignIn>
                        <SignIn path="/sign-in" style={{width: '500px', height: '500'}} />
                    </StyledSignIn>
                </Box>
            </Container>
        </>
    )
}