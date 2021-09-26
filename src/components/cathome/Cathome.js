import React, { useEffect, useState } from 'react';
import Cart from '../cartofcat/Cart';
import Cat from '../cat/Cat';

import './Cathome.css';

const Cathome = () => {
    const [cats, setCats] = useState([]);
    const [cart, setCart] = useState([]);
    const [displayCat, setDisplayCat] = useState([]);

    useEffect(() => {

        fetch('./cats.JSON')
            .then(res => res.json())
            .then(data => {
                setCats(data);
                setDisplayCat(data);
                console.log(data);

            });


    }, []);

    const handleAddtocart = (cat) => {
        const newCart = [...cart, cat];
        setCart(newCart);

    }



    return (
        <> <div className="cat-home">
            <div className="">

                <Cart cart={cart}

                ></Cart>


            </div>
            <div class="row bg-light">
                <div className="row row-cols-1 row-cols-md-3 g-2 g-lg-3  ">


                    {
                        displayCat.map(
                            cat => <Cat
                                key={cat.key}
                                cat={cat}
                                handleAddtocart={handleAddtocart}

                            ></Cat>
                        )
                    }
                </div>
            </div>
        </div>
        </>
    );
};

export default Cathome;