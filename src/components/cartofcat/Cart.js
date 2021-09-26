import React from 'react';


const Cart = (props) => {
    const { cart } = props;
    let total = 0;
    let totalCat = 0;
    let adopted = '';

    for (const cat of cart) {
        if (!cat.quantity) {
            cat.quantity = 1;
        }
        total = total + cat.price * cat.quantity;
        totalCat = totalCat + cat.quantity;
        adopted = adopted + cat.name;






    }

    return (
        <div className="bg-light">
            <h3>Adoption summary</h3>
            <h5>Total cat select:{totalCat}</h5>
            <hr />
            <p>Total Adoption cost:{total.toFixed(2)}</p>
            <p>Added cat's are:
                <li style={{ color: "red" }}>
                    {adopted}

                </li> </p>

        </div>
    );
};

export default Cart;