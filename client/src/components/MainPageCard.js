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
          {/* Их стоимость составляла 720 долларов за пару. 
          Текущая же модель стоит в двое дешевле – купить пару можно за 350 долларов. 
          В комплект входит аккумулятор и беспроводная зарядка. По словам производителя, 
          полный заряд достигает за 3 часа, а носить обувь можно от 10 до 20 дней. 
          Продажи стартуют с 16 февраля.  */}
          </Typography>
        </CardContent>
      </CardActionArea>

        {/* ACTION */}
      <CardActions>
        <Button size="small" color="primary" onClick={basketCounter}>
          Добавить в корзину
        </Button>
        <Button size="small" color="primary">
          Узнать больше
        </Button>
      </CardActions>

    </Card>
  );
}
