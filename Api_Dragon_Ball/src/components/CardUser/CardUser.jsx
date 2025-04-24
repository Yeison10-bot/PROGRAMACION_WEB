import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import { Typography } from '@mui/material';
import './CardUser.css';

const CardUser = ({ image, name, race, gender, ki, maxKi, affiliation }) => {
  return (
    <Card id='cardActionArea' sx={{ maxWidth: 800, overflow: 'visible', position: 'relative' }}>
      <CardActionArea>
        <CardMedia
          id="cardMedia"
          component="div"
          className="card-media-background"
        >
          <div className="image-container">
            <img
              src={image}
              alt={name}
              className="character-image"
            />
          </div>
        </CardMedia>

        <CardContent sx={{ position: 'relative', zIndex: 2 }}>
          <Typography id='name' gutterBottom variant="h1" component="div">
            {name}
          </Typography>
          <Typography className='letras' variant="h7">
            <div id='cardContent'>
              <div>{race}-{gender}</div>
              <div><b>Base Ki:</b> {ki}</div>
              <div><b>Total Ki:</b> {maxKi}</div>
            </div>
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CardUser;
