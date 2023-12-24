import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


export default function MultiActionAreaCard(param) {
  return (
    <Card  sx={{ maxWidth: 345,marginBottom:'10px',borderRadius: '10px' }} id={param.Id}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={param.imageSource}
          alt="Diagno car image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          {param.Title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
          {param.Text} 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions sx={{display: 'flex',  flexDirection: 'column', alignItems:'flex-start'}} >
        <Button size="small" color="primary" >
          خوێندنەوەی زیاتر
        </Button>
      </CardActions>
    </Card>
  );
}