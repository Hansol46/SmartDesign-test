import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    marginTop: 50,
  },
  media: {
    height: 240,
  },
});




export default function MainPageCard({basketCounter, nameProduct, imgProduct, description}) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardActionArea >
          {/* PHOTO */}
        <CardMedia
          className={classes.media}
          image={imgProduct}
          title="new product"
          alt='ops.... problem'
        />
        {/* DESCRIPTION */}
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {nameProduct} 
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {description} 
          </Typography>
        </CardContent>
      </CardActionArea>

        {/* ACTION */}
      <CardActions>
        <Button 
        size="small" 
        color="primary" 
        onClick={basketCounter}
        >
          Добавить в корзину
        </Button>
 
        <Button size="small" color="primary">
          Узнать больше
        </Button>
      </CardActions>

    </Card>
  );
}
