
import React, { useState } from "react";
import products from "../comp/data";
const Cart = () => {
    const [cartItems, setCartItems] = useState([]);
  
    const addToCart = (product) => {
      setCartItems([...cartItems, product]);
    };
  
    const removeFromCart = (productId) => {
      const updatedCart = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedCart);
    };
  
    const getTotalPrice = () => {
      return cartItems.reduce((total, item) => total + item.price, 0).toFixed(2);
    };
  
    return (
      <div>
        <div className="border border-primary border-3  alert alert-dark">
        <h1 className=" text-title text-center text-ligth">Carrito de Compras</h1>
        </div>

        <div className="container">
          <div className="row ">
            <div className="col">
            <h3 className="text-title text-center mb-5  ">Productos</h3>
            <div >
             <div className="col col-8 me-2">
          
            <ul>
              {products.map((product) => (
                
                <li key={product.id}>
                  <div className="container">
                  <div className="row">
                    <div  className="col col-12 border border-2 border-primary shadow me-5 alert alert-primary">
                  <div className="card">
                    <img
                        src={product.imagen}
                        alt="imagen"
                        className="img-thumbnail mx-auto d-block"
                        style={{ width: "25%" }}
                      />
                      <div>
                        <h5 className="card-title text-center"> {product.name} </h5>
                        <p className="card-text text-center"> ${product.price.toFixed(2)}{" "}</p>
                 
                  </div>
                  <button  className="btn btn-primary" onClick={() => addToCart(product)}>Agregar</button>
                  </div>
                  </div>
                  </div>
                  </div>
                </li>
              ))}
            </ul>
         
            </div>
            </div>
          </div>
          <div className="col" >
            <h3 className="text-title text-center mb-5  ">Carrito</h3>
            <div className="col col-8 me-2">
            {cartItems.length === 0 ? (
              <h1 className="text-secondary text-title text-center">El carrito está vacío</h1>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <li key={item.id}>
                    <div className="container">
                      <div className="row">
                        <div className="col col-12 border border-2 border-danger shadow me-5 alert alert-warning">
                          <div className="card">
                        <h5 className="card-title text-center">{item.name}</h5>
                        <p className="card-text text-center">${item.price.toFixed(2)}{" "}</p>
                      
                    <img
                        src={item.imagen}
                        alt="imagen"
                        className="img-thumbnail mx-auto d-block"
                        style={{ width: "25%" }}
                      />
                    <button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>
                      Eliminar
                    </button>
                    </div>
                    </div>
                    </div>
                    </div>
                  </li>
                ))}
                <li>
                  <div className="col">
                  <strong >
                    <h1 className="text-secondary text-title text-center">Total: ${getTotalPrice()}
                      </h1>
                      </strong>
                  </div>
                </li>
              </ul>
              
            )}
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Cart;