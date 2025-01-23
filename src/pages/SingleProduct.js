import React, { useState } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-stars";
import ReactImageZoom from "react-image-zoom";
import Color from "../components/Color";
import { CiHeart } from "react-icons/ci";
import { TbGitCompare } from "react-icons/tb";
import Container from "../components/Container";


const SingleProduct = () => {
  const props = {
    width: 400,
    height: 600,
    zoomWidth: 600,
    img: "https://img.clevup.in/16980/rd-bh202-onear-headphone-with-fm-and-memory-card-s-1702018681276_SKU-0202_0.jpg?format=webp",
  };
  const [orderedProduct, setOrderedProduct] = useState(true);
  const copyToClipboard = (text) => {
    console.log('text', text)
    var textField = document.createElement('textarea')
    textField.innerText = text
    document.body.appendChild(textField)
    textField.select()
    document.execCommand('copy')
    textField.remove()
  }
  return (
    <>
      <Meta title="Product Name" />
      <BreadCrumb title="Product Name" />
      <Container class1="main-product-wrapper py-5 home-wrapper-2">
       
          <div className="row">
            <div className="col-6">
              <div className="main-product-image">
                <div>
                  <ReactImageZoom {...props} />
                </div>
              </div>
              <div className="other-product-images d-flex  flex-wrap gap-15">
                <div>
                  <img
                    className="img-fluid"
                    src="https://5.imimg.com/data5/SELLER/Default/2022/10/MR/NM/HB/151089970/xyz-company-headphone.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="https://img.fruugo.com/product/2/21/1607886212_max.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="https://img4.dhresource.com/webp/m/260x260/f3/albu/ry/z/13/baeab1d1-cea3-4443-91c1-9d2cf5c39319.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    className="img-fluid"
                    src="https://m.media-amazon.com/images/I/61tuzF9NklL._AC_UF1000,1000_QL80_.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="main-product-details">
                <div className="border-bottom">
                  <h3 className="title">
                    Kids Headphones Bulk 10 pack multi colored For students
                  </h3>
                </div>
                <div className="border-bottom py-3">
                  <p className="price">$100.00</p>
                  <div class="d-flex align-items-center gap-10 ">
                    <ReactStars
                      count={5}
                      value={4}
                      size={24}
                      edit={false}
                      activColor="#ffd700"
                    />
                    <p className="mb-0 review">(2 Reviews)</p>
                  </div>
                  <a href="#review">Write a Review</a>
                </div>
                <div className="border-bottom py-3">
                  <div className="d-flex gap-10 align-items-center my-2">
                    <h3 className="product-heading">Type :</h3>
                    <p className="product-data ">Gaming Headphone</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                   
                    <h3 className="product-heading">Brand :</h3>
                    <p className="product-data">SkellCandy</p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                    
                    <h3 className="product-heading">Category :</h3>
                    <p className="product-data"> HeadPhone </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                   
                    <h3 className="product-heading">Tags :</h3>
                    <p className="product-data">bluetooth_headphones </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center my-2">
                   
                    <h3 className="product-heading">Availablity :</h3>
                    <p className="product-data">In Stock</p>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    <h3 className="product-heading">Size :</h3>
                    <div className="d-flex flex-wrap gap-15">
                        <span className="badge border border-1 bg-white text-dark border-secondary">S</span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">M</span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">XL</span>
                        <span className="badge border border-1 bg-white text-dark border-secondary">XXL</span>
                    </div>
                  </div>
                  <div className="d-flex gap-10 flex-column mt-2 mb-3">
                    
                    <h3 className="product-heading">Color :</h3>
                    <Color />
                  </div>
                  <div className="d-flex gap-15 flex-row align-items-center mt-2 mb-3">
                    <h3 className="product-heading mb-0">Quantity :</h3>
                    <div className="">
                        <input
                            type="number"
                            min={1}
                            max={10}
                            className="form-control mb-0"
                            name=""
                            id=""
                            style={{ width: "70px" }}

                        />
                    </div>
                    <div className="d-flex align-items-center gap-30 ms-1">
                    <button className="button border-0 ">Add To Cart</button>
                    <button className='button signup'>Buy It Now</button>
                    </div>
                  </div>
                  <div className="d-flex align-items-center gap-30">
                        <div><CiHeart className="fs-5 me-2" />Add to Wishlist</div>
                        <div><TbGitCompare className="fs-5 me-2"/>Add to Compare</div>
                    </div>
                    <div className="d-flex gap-10 flex-column my-3">
                    <h3 className="product-heading">Shipping & Returns :</h3>
                    <p className="product-data ">
                        free shipping and returns available on all orders!<br/> we ship
                        all US domestic orders within <b>5-10 business days!</b>
                    </p>
                  </div>
                  <div className="d-flex gap-10 align-items-center  my-3">
                    <h3 className="product-heading">Copy Product Link :</h3>
                  <a href="review" onClick={()=>{copyToClipboard("https://m.media-amazon.com/images/I/61tuzF9NklL._AC_UF1000,1000_QL80_.jpg")}}>
                  Product Link
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </Container>
      <Container class1="description-wrapper py-5 home-wrapper-2">
       
          <div className="row">
            <div className="col-12">
              <h4>Description</h4>
              <div className="bg-white p-3">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  ullam adipisci mollitia quaerat perspiciatis? Deserunt cum
                  reprehenderit iste tempore, enim harum nulla similique fuga
                  nostrum minima, nobis accusamus, nihil molestiae?
                </p>
              </div>
            </div>
          </div>
        
      </Container>
      <Container class1="reviews-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <h3 id="review">Reviews</h3>
              <div className="review-inner-wrapper">
                <div className="review-head d-flex justify-content-between align-items-end">
                  <div>
                    <h4 className="mb-2">Customer reviews</h4>
                    <div class="d-flex align-items-center gap-10">
                      <ReactStars
                        count={5}
                        value={4}
                        size={24}
                        edit={false}
                        activColor="#ffd700"
                      />
                      <p className="mb-0">Based on 2 Reviews</p>
                    </div>
                  </div>
                  {orderedProduct && (
                    <div>
                      <a className="text-decoration-underline" href="#review">
                        Write a Review
                      </a>
                    </div>
                  )}
                </div>
                <div className="review-form py-4">
                  <h4>Write a review</h4>
                  <form action="" className="d-flex flex-column gap-15">
                    <div>
                      <ReactStars
                        count={5}
                        value={4}
                        size={24}
                        edit={true}
                        activColor="#ffd700"
                      />
                    </div>

                    <div>
                      <textarea
                        name=""
                        id=""
                        type="text"
                        className="form-control w-100"
                        cols="30"
                        rows="4"
                        placeholder="Comment"
                      />
                    </div>
                    <div className="d-flex justify-content-end">
                      <button className="button border-0">Submit Review</button>
                    </div>
                  </form>
                </div>
                <div className="reviews mt-4 ">
                  <div className="review">
                    <div className="d-flex gap-10 align-items-center ">
                      <h6 className="mb-0">Manoj Ahirwar</h6>
                      <ReactStars
                        count={5}
                        value={4}
                        size={24}
                        edit={false}
                        activColor="#ffd700"
                      />
                    </div>
                    <p className="mt-3">
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Molestiae quod laborum esse distinctio fugiat totam nemo
                      nisi expedita at praesentium tempora nam quas ut,
                      molestias vero? Modi architecto sit adipisci.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
       
      </Container>
      <Container class1="popular-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Popular Products</h3>
            </div>
            <div className="row">
              <ProductCard />
            </div>
          </div>
      
      </Container>
    </>
  );
};

export default SingleProduct;
