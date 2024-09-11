import { AppBar, Container, Toolbar } from '@mui/material'
import React from 'react'
import { Outlet } from 'react-router-dom'

type Props = {}

const NavigationBar = (props: Props) => {
  return (
    <>
        <AppBar position='static'>
            <Container maxWidth='xl'>
                <Toolbar disableGutters>

                </Toolbar>
            </Container>
        </AppBar>
        <Outlet />
    </>
  )
}

export default NavigationBar