import React from "react";
import { connect } from "react-redux";

import {
  makeStyles,
  createMuiTheme
  //ThemeProvider
} from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
//import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

import validateShipping from "../validation/validateShipping";
import { clearCart } from "../actions/cart";

import { Container } from "@material-ui/core";

import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  form: {
    "& > *": {
      margin: theme.spacing(1),
      maxWidth: "100%"
    }
  },
  root: {
    display: "flex",
    padding: "0 20px",
    marginBottom: 10
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 200
  },
  summary: {
    "& > *": {
      display: "flex",
      justifyContent: "space-between",
      marginBottom: 10
    }
  }
}));

const theme = createMuiTheme({
  typography: {
    h5: {
      fontWeight: 700,
      fontStyle: "italic",
      textTransform: "uppercase"
    }
  }
});

const Checkout = (props) => {
  const classes = useStyles();

  const [inputs, setInputs] = React.useState({
    shippingMethod: "regular",
    paymentMethod: "credit-card"
  });
  const [errors, setErrors] = React.useState({});

  const onChange = (event) => {
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: event.target.value
    }));
  };

  const onSubmit = (e) => {
    const validation = validateShipping(inputs);
    if (validation.isValid) {
      if (inputs.paymentMethod === "credit-card") {
        props.history.push("/credit-card");
      } else {
        props.clearCart();
        props.history.push("/thank-you");
      }
    } else {
      setErrors(validation.errors);
    }
  };

  const { addedItems, total } = props.shoes;

  return (
    <div className="checkout__container">
      <Container maxWidth="lg">
        <div className="home__title">Оформление заказа</div>
        <br />
        <Grid container spacing={3}>
          <div className="checkout__form">
            <form>
              <div className="title_page">Ваши данные</div>
              <TextField
                // error
                required
                fullWidth
                id="standard-full-width-required"
                label="Ваше имя"
                name="name"
                value={inputs.name}
                onChange={onChange}
                helperText={errors.name}
              />
              <TextField
                required
                fullWidth
                id="standard-required"
                label="Город"
                name="city"
                value={inputs.city}
                onChange={onChange}
                helperText={errors.city}
              />
              <TextField
                required
                fullWidth
                id="standard-required"
                label="Номер телефона"
                name="phonenumber"
                value={inputs.phonenumber}
                onChange={onChange}
                helperText={errors.phonenumber}
              />
              <br />
              <br />

              <div className="title_page">Выберите вид оплаты</div>
              <RadioGroup
                aria-label="Payment method"
                name="paymentMethod"
                value={inputs.paymentMethod}
                onChange={onChange}
              >
                <FormControlLabel
                  value="credit-card"
                  control={<Radio />}
                  label="По банковской карте (Онлайн)"
                />
                <FormControlLabel
                  value="cod"
                  control={<Radio />}
                  label="Выставить счёт (для Юридических лиц)"
                />
              </RadioGroup>
            </form>
          </div>

          {/* <div className="checkout__info"> */}
          <div className="checkout__cart">
            <div className="title_page">Ваш заказ</div>
            <br />
            {addedItems.map((item) => (
              <Card className={classes.root} variant="outlined">
                {/*
                  <CardMedia
                    className={classes.cover}
                    image={item.img}
                    title={item.title}
                  />*/}
                <div className={classes.details}>
                  <CardContent className={classes.content}>
                    <Typography component="h6" variant="h6">
                      {item.title}
                    </Typography>
                    <Typography variant="subtitle">
                      Стоимость: {item.price} руб.
                    </Typography>
                    {/*
                      <Typography variant="subtitle2">
                        Size: {item.selectedSize}
                      </Typography>
                      */}
                    <Typography variant="subtitle2">
                      Количество: {item.quantity}
                    </Typography>
                  </CardContent>
                </div>
              </Card>
            ))}

            <br />
            <div className="checkout__summary">
              <div className="title_page">Стоимость заказа</div>
              <br />
              <Card>
                <CardContent className={classes.summary}>
                  <div>
                    <Typography variant="h6">Итого к оплате:</Typography>
                    <Typography variant="h6">{total} руб.</Typography>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Grid>

        <Button
          color="secondary"
          variant="contained"
          onClick={onSubmit}
          fullWidth
        >
          Оформить заказ
        </Button>
        {/* </div> */}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shoes: state.shoes
});

export default connect(mapStateToProps, { clearCart })(Checkout);
