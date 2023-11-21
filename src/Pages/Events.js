import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Events() {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
      <Navbar />
      {/* 1st Card*/}
      <Card sx={{ margin: '10px', maxWidth: 400 }}>
        <CardMedia
          sx={{ height: 200 }}
          image='https://www.sih.gov.in/img/logo.png'
          title="MSWD"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
         Venue: KLU
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
         Level: Internal Hackathon
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
         Date & Time: 25th Sept 7:00 a.m. to  26th September 2023 5:00 p.m.  (34 Hours) 
          </Typography>
          <Typography variant="h6" component="div">
          Theme: Smart Automation
          </Typography>
        </CardContent>
        <CardActions>
        <Button component={Link} to="/sih" >Learn More</Button>
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
