import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 645,
    backgroundColor: 'rgba(0,0,0,0.5)',
    margin: '20px',
   
  },
  media: {
    height: 440,
  },
  title: {
      fontFamily: 'Nunito',
      fontSize: '2rem',
      color: 'white'
  },
  description: {
    color: 'white'
  }
}));

export default function MediaCard(props) {
  // console.log(props)
  // console.log(`with braces: ${props}`)
  const {title, imageURL, description, checked} = props;
  // console.log(`title: ${title}`)
  // console.log(props.props)
  const classes = useStyles();

  return (
    <Collapse in={checked} {...(true ? { timeout: 1000}: {})}>
      <Card className={classes.root}>

        <CardMedia
          className={classes.media}
          image={imageURL}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography
            gutterBottom variant="h5"
            component="h2"
            className={classes.title}>
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.description}>
            {description}
          </Typography>
        </CardContent>

      </Card>
    </Collapse>
    
  );
}