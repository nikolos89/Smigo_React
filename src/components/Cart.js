import React from "react";
import { connect } from "react-redux";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
//import CardContent from "@material-ui/core/CardContent";
//import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
//import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
//import AddCircleIcon from "@material-ui/icons/AddCircle";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

//import Grid from "@material-ui/core/Grid";

import {
  removeFromCart,
  addQuantity,
  subQuantity,
  clearCart
} from "../actions/cart";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 300
  },
  button: {
    width: 200,
    marginBottom: 30
  }
}));

const Cart = (props) => {
  const classes = useStyles();

  const { addedItems } = props.shoes;

  const handleAddQuantity = (id) => {
    props.addQuantity(id);
  };

  const handleSubQuantity = (id) => {
    props.subQuantity(id);
  };

  const handleRemove = (id) => {
    props.removeFromCart(id);
  };

  const onCheckout = () => {
    props.history.push("/checkout");
  };

  const onClearCart = () => {
    props.clearCart();
  };

  if (addedItems.length) {
    var addedShoes = addedItems.map((item) => {
      item.selectedSize = props.size;

      return (
        <Card>
          {/*<CardMedia
            className={classes.cover}
            //image={item.img}
            //title={item.title}
          />*/}
          <div className="cart_product">
            <Typography component="h5" variant="h5">
              {item.title}
            </Typography>
            <div>
              <Typography variant="subtitle">
                Стоимость: {item.price} руб.
              </Typography>
            </div>
            <br />
            <div>
              <Typography variant="subtitle">
                Выбранные свойства тарифного плана:
              </Typography>
            </div>
            <br />
            <br />

            {/* //тут делаем СВОЙСТВА ТАРИВА, выводим - выбранные
              <Typography variant="subtitle2">Size: {props.size}</Typography>
              */}

            {/*  // тут делаем количество товара
              <Typography variant="subtitle1" color="textSecondary">
                Quantity: {item.quantity}
              </Typography>


              <RemoveCircleIcon
                color="secondary"
                onClick={() => handleSubQuantity(item.id)}
              ></RemoveCircleIcon>
              <AddCircleIcon
                color="secondary"
                onClick={() => handleAddQuantity(item.id)}
              ></AddCircleIcon>

            */}

            {/*  СОБАКА НЕ РАБОТАЕТ СДВИГ В ПРАВУЮ СТОРОНУ!!!!! ЧТО ЗА ХРЕНЬ?!?!??!  */}

            <div className="cart__summary">
              <Button variant="contained" onClick={() => handleRemove(item.id)}>
                Удалить из корзины
              </Button>
            </div>
          </div>
        </Card>
      );
    });
  } else {
    var addedShoes = <div className="cart__empty">Ваша корзина пуста</div>;
  }

  return (
    <div className="cart">
      <Container maxWidth="lg">
        <div className="home__title">Корзина</div>

        <div className="cart__items">{addedShoes}</div>
        {addedShoes.length && (
          <div className="cart__summary">
            <Typography variant="h4">
              Итого: {props.shoes.total} руб.
            </Typography>
            <br />

            <div class="cart_checkout_clear_button">
              <Button
                variant="contained"
                className={classes.button}
                onClick={onClearCart}
              >
                Очистить корзину
              </Button>
              <Button
                color="primary"
                variant="contained"
                className={classes.button}
                onClick={onCheckout}
              >
                Оформить заказ
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shoes: state.shoes
});

export default connect(mapStateToProps, {
  removeFromCart,
  addQuantity,
  subQuantity,
  clearCart
})(Cart);
