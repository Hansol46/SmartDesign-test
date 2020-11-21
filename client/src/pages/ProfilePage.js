import React from "react";
import Profile from "../components/Profile";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    // border: "1px solid blue",
    display: "flex",
    flexDirection: "column",
    // textAlign: 'center'
    // alignItems: 'center'
    justifyContent: "space-around",
  },
  profile: {
    display: "flex",
    marginTop: 50,
    // border: "1px solid red",
    padding: "20px 10px 20px 10px",
    // width: '50%',
    // margin: '0 auto'
    justifyContent: "space-around",
    // textAlign: 'center'
  },
  text: {
    fontSize: "12px",
  },
  profileCard: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    // border: "1px solid green",
    //   marginLeft: '50px'
  },
  last: {
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
  img: {
      width: '150px'
  }
}));

function ProfilePage() {
  const classes = useStyles();
  return (
    <div className={classes.profile}>
      <div className={classes.profileCard}>
        <Profile />
        <p>Юрий Киряев</p>
        <p className={classes.text}>вы в сети</p>
      </div>

      <div className={classes.root}>
        <p>Всего заказов сделано: 7</p>
        <p>Почта: y@mail.ru</p>
        <p>Телефон: 8-910-101-10-10</p>
        <p>Скидка: 21%</p>
      </div>

      <div>
        <div className={classes.last}>{"Последний заказ:"}</div>
        <img
          src="https://timberland.ru/upload/resize_cache/iblock/74f/400_400_1/5f4e189659893_first_photo.jpg"
          alt="ooops..."
          title="last"
          className={classes.img}
        />
      </div>
    </div>
  );
}

export default ProfilePage;
