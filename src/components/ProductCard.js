import React from "react";
import ReactStars from "react-stars";
import { Link,useLocation } from "react-router-dom";
import productcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
import view from "../images/view.svg";
import addcart from "../images/add-cart.svg";
import watch from "../images/watch.jpg";
import watch1 from "../images/watch-1.jpg";


const ProductCard = (props) => {
    const {grid }= props;
    let location = useLocation();

  
  return (
    <>
    <div className={`${location.pathname === '/product' ? `gr-${grid}` : 'col-3'}`}>
      <Link to=":id" className="product-card  position-relative">
        <div className="wishlist-icon position-absolute">
          <button className="border-0 bg-transparent">
            <img src={wish} alt="Wishlist" />
          </button>
        </div>
        <div className="product-image">
          <img
            src={watch}
            className="img-fluid"
            alt="product_image"
          />
          <img
            src={watch1}
            className="img-fluid"
            alt="product_image"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars count={5} value={4} size={24} color2={"#ffd700"} />
          <p className={`description ${grid===12 ? "d-block":"d-none" }`} >
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt...
          </p>

          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <button className="border-0 bg-transparent">
              <img src={productcompare} alt="product-compare" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={view} alt="view" />
            </button>
            <button className="border-0 bg-transparent">
              <img src={addcart} alt="addcart" />
            </button>
          </div>
        </div>
      </Link>
    </div>
    <div className={`${location.pathname === '/store' ? `gr-${grid}` : 'col-3'}`}>
      <Link className="product-card  position-relative">
        <div className="wishlist-icon position-absolute">
          <Link>
            <img src={wish} alt="Wishlist" />
          </Link>
        </div>
        <div className="product-image">
          <img
            src={watch}
            className="img-fluid"
            alt="product_image"
          />
          <img
            src={watch1}
            className="img-fluid"
            alt="product_image"
          />
        </div>
        <div className="product-details">
          <h6 className="brand">Havels</h6>
          <h5 className="product-title">
            Kids headphones bulk 10 pack multi colored for students
          </h5>
          <ReactStars count={5} value={4} size={24} color2={"#ffd700"} />
          <p className={`description ${grid===12 ? "d-block":"d-none" }`} >
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt...
          </p>
          <p className="price">$100.00</p>
        </div>
        <div className="action-bar position-absolute">
          <div className="d-flex flex-column gap-15">
            <Link>
              <img src={productcompare} alt="product-compare" />
            </Link>
            <Link>
              <img src={view} alt="view" />
            </Link>
            <Link>
              <img src={addcart} alt="addcart" />
            </Link>
          </div>
        </div>
      </Link>
    </div>

    </>
    
  );
};

export default ProductCard;
