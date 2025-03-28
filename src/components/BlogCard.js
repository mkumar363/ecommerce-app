import React from "react";
import { Link } from "react-router-dom";

const BlogCard = () => {
  return (
    
      <div className="blog-card">
        <div className="card-image">
          <img src="images/blog-1.jpg" className="img-fluid w-100" alt="blog" />
        </div>
        <div className="blog-content">
          <p className="date"> 1 Dec 2024</p>
          <h5 className="title">A Beautiful Sunday Morning Renaissance</h5>
          <p className="desc">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
            minima quisquam natus adipisci quae enim.{" "}
          </p>
          <Link className="button" to="/blogs/:id">
            Read More 
          </Link>
        </div>
      </div>
   
  );
};

export default BlogCard;
