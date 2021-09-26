import React from 'react';
import './Cat.css';
import '../cathome/Cathome'

import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat } from '@fortawesome/free-solid-svg-icons';




const Cat = (props) => {
    const { name, price, shop, picture, age, origin } = props.cat;
    const element = <FontAwesomeIcon icon={faCat} />

    return (




        <div className="card mx-auto px-1  p-3 shadow-lg p-3 mb-5 bg-body rounded">
            <img className="card-img-top " src={picture} alt="" srcset="" />
            <div className="card-body">
                <h5 className="card-title">Name:{name}</h5>
                <p className="card-text">price:{price}</p>
                <p className="card-text">age:{age} year</p>
                <p className="card-text">Origin:{origin} </p>
                <p className="card-text">Company name:{shop}</p>
                <button className="btn-danger btn" onClick={() => {
                    props.handleAddtocart(props.cat);

                }
                }
                >{element} Take me</button>
            </div>

        </div>



    );
};

export default Cat;