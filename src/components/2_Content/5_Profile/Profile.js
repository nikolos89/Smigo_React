import React from "react";
import { connect } from "react-redux";
//import $ from "jquery";

import { makeStyles } from "@material-ui/core/styles";
//import Typography from "@material-ui/core/Typography";
//import Button from "@material-ui/core/Button";

import { Container } from "@material-ui/core";

import "./profile.css";

/*
const useStyles = makeStyles((theme) => ({
  button: {
    width: "100%"
  }
}));*/

const Profile = (props) => {
  return (
    <div className="profile">
      <Container maxWidth="lg">
        <div className="home__title">Личный кабинет</div>
        {/*
          <div className="detail__img">
            <img src={selectedItem.img} alt="" />
          </div>
          */}
      </Container>
    </div>
  );
};

const Profiles = (state) => ({
  //shoes: state.shoes
});

export default connect(Profiles, null)(Profile);
