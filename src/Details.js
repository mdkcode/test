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
    <div className="container-fluid">
    <div className="row">
    <div className="col-lg-12 bg-primary p-2">
     <h3 className="text-center">Book Blog</h3>
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
  <div className="row m-3">
    <div className="d-flex flex-column justify-content-center align-items-center col">
    <img src={image} alt="..." className="img-responsive img-rounded"></img>
    <p>Chosen as one of the best books by readers</p>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center col">
    <img src={cover} alt="..." className="img-responsive img-rounded"></img>
    <p>Chosen as one of the best books by readers</p>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center col">
    <img src={full} alt="..." className="img-responsive img-rounded"></img>
    <p>Chosen as one of the best books by readers</p>
    </div>
  </div>
  <div className="row m-3">
    <div className="d-flex flex-column justify-content-center align-items-center col">
    <img src={tess} alt="..." className="img-responsive img-rounded"></img>
    <p>Chosen as one of the best books by readers</p>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center col">
    <img src={title} alt="..." className="img-responsive img-rounded"></img>
    <p>Chosen as one of the best books by readers</p>
    </div>
    <div className="d-flex flex-column justify-content-center align-items-center col">
    <img src={unnamed} alt="..." className="img-responsive img-rounded"></img>
    <p>Chosen as one of the best books by readers</p>
    </div>
  </div>
    </div>
  </div>
  <div className="col-lg-12 bg-primary p-2">
     <h3 className="text-center">Best Books of the Month</h3>
  </div>
   <Table />
    </div>
      
  );
};

export default Details;