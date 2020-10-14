import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TelegramIcon from "@material-ui/icons/Telegram";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import PinterestIcon from "@material-ui/icons/Pinterest";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";

import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
//import { SpaRounded } from "@material-ui/icons";

//import FilledInput from "@material-ui/core/FilledInput";
//import OutlinedInput from "@material-ui/core/OutlinedInput";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import { withStyles } from "@material-ui/core/styles";

import "./footer.css";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "white"
    },
    "& .MuiInput-underline:after": {
      borderBottomColor: "#0070ff"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "white"
      },
      "&:hover fieldset": {
        borderColor: "#222222"
      },
      "& .MuiInput": {
        color: "white"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#0070ff"
      }
    }
  }
})(TextField);

const useStyles = makeStyles((theme) => ({
  cssOutlinedInput: {
    "&$cssFocused $notchedOutline": {
      borderColor: `${theme.palette.primary.main} !important`
    }
  },
  cssFocused: {},
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "green !important"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <footer className="footer">
      <Container maxWidth="lg">
        <div className="footer__container">
          <div className="footer__info">
            <Typography class="footer_label">Подписаться на новости</Typography>
            <form noValidate autoComplete="off">
              <CssTextField
                className={classes.margin}
                label="E-mail"
                variant="outlined"
                id="custom-css-outlined-input"
                size="small"
                style={{ margin: "0 20px 0 0", color: "white" }}
                InputProps={{
                  className: classes.multilineColor
                }}
              />
              <Button
                //variant="outlined"
                variant="contained"
                color="primary"
                href="#outlined-buttons"
                style={{ height: "40px" }}
              >
                Подписаться
              </Button>
            </form>
          </div>
          <div className="footer__contact">
            <Typography class="footer_label">Будьте с нами на связи</Typography>
            <a href="https://facebook.com" class="footer_icon">
              <TelegramIcon></TelegramIcon>
            </a>
            <a href="https://facebook.com" class="footer_icon">
              <YouTubeIcon></YouTubeIcon>
            </a>
            <a href="https://instagram.com" class="footer_icon">
              <InstagramIcon></InstagramIcon>
            </a>
            <a href="https://instagram.com" class="footer_icon">
              <FacebookIcon></FacebookIcon>
            </a>
            <a href="https://instagram.com" class="footer_icon">
              <TwitterIcon></TwitterIcon>
            </a>
            <a href="https://instagram.com" class="footer_icon">
              <PinterestIcon></PinterestIcon>
            </a>
            <a href="https://instagram.com" class="footer_icon">
              <WhatsAppIcon></WhatsAppIcon>
            </a>
            <a href="https://instagram.com" class="footer_icon">
              <InstagramIcon></InstagramIcon>
            </a>
          </div>
        </div>
      </Container>
      <div className="footer__copyrigth">
        <Container maxWidth="lg">
          <span class="footer_text_coopyrigth">
            Авторские права © 2020 SMIGO.ru
          </span>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
