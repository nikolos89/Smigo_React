import React from "react";
import { connect } from "react-redux";
//import $ from "jquery";

import { makeStyles } from "@material-ui/core/styles";
//import Typography from "@material-ui/core/Typography";
//import Button from "@material-ui/core/Button";

import { Container } from "@material-ui/core";

import "./news.css";

/*
const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%"
  }
}));*/

const News = (props) => {
  return (
    <div className="profile">
      <Container maxWidth="lg">
        <div className="home__title">Новости Smigo</div>
        {/*
          <div className="detail__img">
            <img src={selectedItem.img} alt="" />
          </div>
          */}
      </Container>
    </div>
  );
};

const News_elem = (state) => ({
  //shoes: state.shoes
});

export default connect(News_elem, null)(News);
