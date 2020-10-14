import React from "react";
//import { render } from 'react-dom'
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//import Button from "@material-ui/core/Button";
//import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";

//import IconButton from "@material-ui/core/IconButton";
//import MenuIcon from "@material-ui/icons/Menu";

import "./navbar.css";

//import { ReactSVG } from "react-svg";
//import Logo from "./logo.svg";

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#4791db"
    }
  }
});

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  }
}));

const Navbar = (props) => {
  const classes = useStyles();

  /*
  const handleClickItem = (id) => {
    props.selectItem(id);
  };
*/
  return (
    <div className={classes.root}>
      <ThemeProvider theme={theme}>
        <AppBar position="fixed" color="default">
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" style={{ color: "black" }}>
                LOGO
              </Link>
              {/*
              <Logo />
              */}
              {/*<ReactSVG
                src="logo.svg"
                afterInjection={(error, svg) => {
                  if (error) {
                    console.error(error);
                    return;
                  }
                  console.log(svg);
                }}
                beforeInjection={(svg) => {
                  svg.classList.add("svg-class-name");
                  svg.setAttribute("style", "width: 200px");
                }}
                evalScripts="always"
                fallback={() => <span>Error!</span>}
                loading={() => <span>Loading</span>}
                renumerateIRIElements={false}
                wrapper="span"
                className="wrapper-class-name"
                onClick={() => {
                  console.log("wrapper onClick");
                }}
              />*/}
            </Typography>

            <div class="menu">
              <Link to="/" className="menu_element">
                <Typography variant className={classes.title}>
                  О проекте
                </Typography>
              </Link>
              <Link to="/news" className="menu_element">
                <Typography variant className={classes.title}>
                  Новости
                </Typography>
              </Link>
              <Link to="/" className="menu_element">
                <Typography variant className={classes.title}>
                  Выбрать тариф
                </Typography>
              </Link>

              <Link to="/" className="menu_element">
                <Typography variant className={classes.title}>
                  Войти/Регистрация
                </Typography>
              </Link>
              <Link to="/profile" className="menu_element">
                <Typography variant className={classes.title}>
                  Личный кабинет
                </Typography>
              </Link>
              <Link to="/cart" className="menu_element">
                <Badge badgeContent={props.shoes.quantity} color="error">
                  <Typography variant>Корзина</Typography>
                </Badge>
              </Link>
            </div>
            {/*<IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            > 
              <MenuIcon />
            </IconButton>*/}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shoes: state.shoes
});

export default connect(mapStateToProps, null)(Navbar);
