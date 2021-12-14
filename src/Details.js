import React from "react";
import { NavLink } from "react-router-dom";
import Table from "./Table";
import cover from './assets/img/cover.png';
import image from './assets/img/image.png';
import full from './assets/img/full.jpg';
import tess from './assets/img/tess.jpg';
import title from './assets/img/title.jpg';
import unnamed from './assets/img/unnamed.jpg';

const Details = props => {
  const { username, email, city, phone } =
    (props.location && props.location.state) || {};
  return (
    <div className="App">
    <div class="container-fluid">
    <div class="row">
    <div class="col-lg-12 bg-primary p-2">
     <h3 class="text-center">Book Blog</h3>
  </div>
  <div>
  <NavLink to="/" className="active">
        Go Back
      </NavLink>
      <div className="form-details">
        <div>
          <strong>Username:</strong> {username}
        </div>
        <div>
          <strong>Email:</strong> {email}
        </div>
        <div>
          <strong>City:</strong> {city}
        </div>
        <div>
          <strong>Phone:</strong> {phone}
        </div>
      </div>
    </div>
  <div class="row m-3">
    <div class="d-flex flex-column justify-content-center align-items-center col">
    <img src={image} alt="..." class="img-responsive img-rounded"></img>
    <p>Chosen as one of the best books by readers</p>
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center col">
    <img src={cover} alt="..." class="img-responsive img-rounded"></img>
    <p>Chosen as one of the best books by readers</p>
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center col">
    <img src={full} alt="..." class="img-responsive img-rounded"></img>
    <p>Chosen as one of the best books by readers</p>
    </div>
  </div>
  <div class="row m-3">
    <div class="d-flex flex-column justify-content-center align-items-center col">
    <img src={tess} alt="..." class="img-responsive img-rounded"></img>
    <p>Chosen as one of the best books by readers</p>
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center col">
    <img src={title} alt="..." class="img-responsive img-rounded"></img>
    <p>Chosen as one of the best books by readers</p>
    </div>
    <div class="d-flex flex-column justify-content-center align-items-center col">
    <img src={unnamed} alt="..." class="img-responsive img-rounded"></img>
    <p>Chosen as one of the best books by readers</p>
    </div>
  </div>
    </div>
  </div>
  <div class="col-lg-12 bg-primary p-2">
     <h3 class="text-center">Best Books of the Month</h3>
  </div>
   <Table />
    </div>
      
  );
};

export default Details;