import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import Color from "../components/Color";
import  Container  from "../components/Container";

const CompareProduct = () => {
  return (
    <>
      <Meta title="Compare Product" />
      <BreadCrumb title="Compare Product" />
      <Container class1="compare-product-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute img-fluid cross"
                />
                <div className="product-card-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="title" >
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 inch with Wi-Fi+4G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                  <div>
                    <div className="product-detail ">
                      <h5 className="sub-title">Brand:</h5>
                      <p>Havells</p>
                    </div>
                    <div className="product-detail ">
                      <h5 className="sub-title">Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail ">
                      <h5 className="sub-title">Availiablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail ">
                      <h5 className="sub-title">color:</h5>
                     <Color />
                    </div>
                    <div className="product-detail ">
                      <h5 className="sub-title">Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="compare-product-card position-relative">
                <img
                  src="images/cross.svg"
                  alt="cross"
                  className="position-absolute img-fluid cross"
                />
                <div className="product-card-image">
                  <img
                    src="images/watch.jpg"
                    alt="watch"
                    className="img-fluid"
                  />
                </div>
                <div className="compare-product-details">
                  <h5 className="title" >
                    Honor T1 7.0 1 GB RAM 8 GB ROM 7 inch with Wi-Fi+4G Tablet
                  </h5>
                  <h6 className="price mb-3 mt-3">$100</h6>
                  <div>
                    <div className="product-detail ">
                      <h5 className="sub-title">Brand:</h5>
                      <p>Havells</p>
                    </div>
                    <div className="product-detail ">
                      <h5 className="sub-title">Type:</h5>
                      <p>Watch</p>
                    </div>
                    <div className="product-detail ">
                      <h5 className="sub-title">Availiablity:</h5>
                      <p>In Stock</p>
                    </div>
                    <div className="product-detail ">
                      <h5 className="sub-title">color:</h5>
                     <Color />
                    </div>
                    <div className="product-detail ">
                      <h5 className="sub-title">Size:</h5>
                      <div className="d-flex gap-10">
                        <p>S</p>
                        <p>M</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
       
      </Container>
    </>
  );
};

export default CompareProduct;
