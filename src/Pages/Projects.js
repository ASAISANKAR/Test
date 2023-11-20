import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar';
import Logo from './Screenshot 2023-11-20 205137.png'
import { Link } from 'react-router-dom';

export default function Project() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <Navbar />
      {/* 1st Card*/}
      <Card sx={{ margin: '10px', maxWidth: 400 }}>
        <CardMedia
          sx={{ height: 200 }}
          image={Logo}
          title="MSWD"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
           Tourist & Hospitality Management System
          </Typography>
          <Typography variant="body2" color="text.secondary">
          The Tourist & Hospitality Management System is a comprehensive web-based application designed to 
streamline the management of tourist accommodations, services, and activities. 
          </Typography>
        </CardContent>
        <CardActions>
        <Button component={Link} to="/tourism" >Learn More</Button>
        </CardActions>
      </Card>

      {/* To Be Continue Card*/}
      <Card sx={{ margin: '30px', maxWidth: 400, maxHeight: 200}}>
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          <h3>To be continued...</h3>
      <p>Check back later for more updates!</p>
          </Typography>
        </CardContent>
      </Card>

      
    </div>
  );
}
