import React, { useState } from "react";
import { fade, makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { NavLink } from "react-router-dom";

// STYLES
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  link: {
    color: "white",
    textDecoration: "none",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  link2: {
    color: "black",
    textDecoration: "none",
  },
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export default function Header({
  counter,
  setSearch,
  searchProduct,
}) {
  // HOOKS
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  // SEARCH PRODUCT
  const callSearchFunction = (event) => {
    event.preventDefault();
    setSearch("");
    console.log(searchProduct);
  };

  // MOBILE VERSION
  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        {/* BASKET */}
        <IconButton aria-label="show 2 product" color="inherit">
          <Badge badgeContent={counter} color="secondary">
            <ShoppingBasketIcon />
          </Badge>
        </IconButton>
        <p>Basket</p>
      </MenuItem>
      <NavLink to="/profile" className={classes.link2}>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </NavLink>
    </Menu>
  );

  // RENDER
  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          {/* NAME MAGAZINE */}
          <Typography className={classes.title} variant="h6" noWrap>
            Магазин Обуви
          </Typography>

          {/* INPUT FIELD */}
          <form onSubmit={callSearchFunction}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Поиск товара"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                type="text"
                // value={searchProduct}
                onChange={(event) => setSearch(event.target.value)}
              />
            </div>
          </form>

          <Typography className={classes.title} variant="h6" noWrap>
            <NavLink to="/" className={classes.link}>
              Главная страница
            </NavLink>
          </Typography>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            
            {/* BASKET */}
            <IconButton aria-label="show 2 product" color="inherit">
              <Badge badgeContent={counter} color="secondary">
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>

            {/* Account  */}
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <NavLink to="/profile" className={classes.link}>
                <AccountCircle />
              </NavLink>
            </IconButton>
          </div>

          {/* MOBILE VERSION */}
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </div>
  );
}
