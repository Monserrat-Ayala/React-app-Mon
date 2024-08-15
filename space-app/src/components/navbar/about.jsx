  import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

import { useState, useEffect } from 'react';

import './about.css'




const About = () => (
    <>
    <div className='container'>
    <Card className='card'>
        <CardActionArea >
            <CardMedia 
            component="img"
            image='/public/yo.jpg'
            />
            <CardContent>
            <h1>Hola, soy Monserrat Ayala</h1>
            <h2>Soy apasionada por la tecnologia</h2>
            <p>Me gusta leer, viajar, escuchar musica y bailar</p>
            <p>Correo de contacto: missick29@gmail.com</p>
            <p>Soy Licenciada en Derecho titulada, con aspiraciones a aprender cosas nuevas constantemente</p>
            <p><small>Gracias a Dios por todo lo que me da día a día</small></p>
            </CardContent>
            
        </CardActionArea>
    </Card>
    </div>
     
    </>
)

export default About;