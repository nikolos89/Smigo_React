import React from "react";
import { connect } from "react-redux";
import $ from "jquery";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { addToCart } from "../actions/cart";
import { Container } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%"
  }
}));

const Detail = (props) => {
  const classes = useStyles();

  const { selectedItem } = props.shoes;
  //const { selectedItem.id } = "Товар";
  //const { selectedItem.title } = "Товар";

  const addToCart = (id) => {
    var sizeValue = $("input:radio[name='size-selector']:checked").val();

    if (id) {
      //ТУТ ВТЫКАЕМ ПРОВЕРКУ НА ЗПОЛНЕННЫЕ ПОЛЯ, ИНАЧЕ - ДЕЛАЕМ РУГАЛКУ
      $("#size-error").html("");
      props.addToCart(id);
      //props.passSizeValue(sizeValue);
    } else {
      $("#size-error").html("Please select your size");
    }
  };

  return (
    <div className="detail">
      <div className="detail__container">
        <Container maxWidth="lg">
          <div className="home__title">Выберите тарифный план</div>
          {/*
          <div className="detail__img">
            <img src={selectedItem.img} alt="" />
          </div>
          */}
          <div className="detail__info">
            <div class="border">
              <Typography gutterBottom variant="h5" component="h2">
                {selectedItem.title}
              </Typography>
              <Typography variant="h6">
                Стоимость: {selectedItem.price} руб.
              </Typography>
              <br />
              <br />

              {/*     // ТУТ УБИРАЕМ КОММЕНТЫ И ДОБАВЛЯЕМ СВОЙСТВА К ТАРИФУ
            
              <Typography variant="subtitle1">Количество доменов</Typography>
              <div className="radio-group">
                {selectedItem.size((size) => (
                  <>
                    <input
                      type="radio"
                      id={size}
                      name="size-selector"
                      value={size}
                    ></input>
                    <label for={size}>{size}</label>
                  </>
                ))}
                <div id="size-error"></div>
              </div>

              */}
              <Typography varitant="subtitle1">{selectedItem.desc}</Typography>
            </div>
            <br />
            <Button
              className={classes.button}
              color="secondary"
              variant="contained"
              onClick={() => addToCart(selectedItem.id)}
            >
              Добавить в корзину
            </Button>
          </div>
        </Container>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  shoes: state.shoes
});

export default connect(mapStateToProps, { addToCart })(Detail);
