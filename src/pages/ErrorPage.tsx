import { Container } from '@mui/material';
import React from 'react'
import { useRouteError } from 'react-router-dom';

const ErrorPage = () => {
    const error = useRouteError();
    console.log(error);
  return (
    <Container maxWidth='md' className='text-center'>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occured.</p>
    </Container>
  )
}

export default ErrorPage