import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import 'typeface-roboto';
import Header from "../../components/Header/index";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';



const styles = {
    card: {
           maxWidth: 800,
     
    },
    media: {
      // ⚠️ object-fit is not supported by IE 11.
      objectFit: 'cover',
      height: 300,
      width: 800,
      marginTop: 40
    },
  };
  function ImgMediaCard(props) {
    const { classes } = props;
    return (
        <div>
        
       <Header />
       <div align="center">
        <Paper>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Family"
            className={classes.media}
            height="140"
            image="../images/aboutus1.png"
            title="Contemplative Reptile"
          />
          <CardContent>
          <Typography variant="h5" component="h3">
About Us
</Typography>
<Typography component="p">
Connecting through your family through the world made easier
</Typography>
<Typography component="p">
Simplistic enough for the grandparents to use and functionality for everyone in the family to connect or reconnect.
This project was started to bring a way for the family to connect with one another without the hassle
or complications that other social media platforms have.
</Typography>
<Typography component="p">
Chat room for the cousins secret birthday celebration? Have everyone except him
</Typography>

<Typography component="p">
Forgot the date of your aunt's birthday? Look at the shared calendar
</Typography>
          </CardContent>
        </CardActionArea>
      
      </Card>
      </Paper>
      </div>
      </div>
    );
  }
  
  ImgMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(ImgMediaCard);