
import React, { Component } from "react";
import './About.css'; 

class About extends Component {
  render() {
    return (
      <>
        <div className="about-header px-4 pt-5 my-5 text-center border-bottom">
          <h1 className="display-3 fw-bold text-primary mb-4 title-animate">
            <img
              src="https://media.gettyimages.com/id/1155709677/vector/pizzeria.jpg?s=612x612&w=0&k=20&c=DFtfVegbqzUd-uHD4q8jIkr2izv0XcpuskC2eDm0Nk4="
              className="logo-img"
              alt="Pizza Store Logo"
            />
            Freshy Pizza Store
          </h1>

          <div className="col-lg-8 mx-auto">
            <p className="lead mb-4 text-description">
              Welcome to Freshy Pizza Store, where every slice is a celebration of flavor, tradition, and quality. Our journey began with a passion for creating the perfect pizza, and that passion fuels everything we do. From the moment you walk through our doors, you’ll experience the warmth of our family-owned pizzeria, where every pizza is hand-tossed and baked to perfection.
            </p>

            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
              <button className="btn btn-primary rounded-pill px-4 py-2" type="button">
                Menu
              </button>
              <button className="btn btn-primary rounded-pill px-4 py-2" type="button">
                Contact Us
              </button>
            </div>
          </div>

          <div className="overflow-hidden mb-4" style={{ maxHeight: "40vh" }}>
            <div className="container px-5">
              <img
                src="https://images.pexels.com/photos/1596884/pexels-photo-1596884.jpeg?auto=compress&cs=tinysrgb&w=600"
                className="img-fluid border rounded-4 shadow-lg"
                alt="Pizza Image"
                width="700"
                height="500"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <h1 className="display-4 fw-bold text-center text-secondary mb-5">
          Our Best Products
        </h1>

        <div className="container">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {[
              {
                title: "Classic Margherita",
                description: "Our classic Margherita pizza is made with fresh tomatoes, mozzarella, and basil, bringing a taste of Italy to your table.",
                imgSrc: "https://www.jsonline.com/gcdn/presto/2023/06/20/PMJS/814ae740-b14d-43e9-9327-cac1b62d055c-BrickPizza.jpg?width=660&height=440&fit=crop&format=pjpg&auto=webp",
              },
              {
                title: "Pepperoni Feast",
                description: "Enjoy a feast of pepperoni with our Pepperoni pizza, loaded with premium pepperoni slices and mozzarella cheese.",
                imgSrc: "https://www.providencejournal.com/gcdn/authoring/2019/06/18/NPRJ/ghows-PJ-8b9ea6aa-0dad-08c7-e053-0100007fbbc9-1be845a9.jpeg?width=660&height=440&fit=crop&format=pjpg&auto=webp",
              },
              {
                title: "Veggie Delight",
                description: "A delightful mix of fresh veggies, including bell peppers, onions, and olives, topped with mozzarella cheese.",
                imgSrc: "https://www.telegram.com/gcdn/authoring/2018/06/25/NTEG/ghows-WT-6f3f71d8-82c5-0501-e053-0100007f07df-a303a5da.jpeg?width=660&height=440&fit=crop&format=pjpg&auto=webp",
              },
              {
                title: "BBQ Chicken",
                description: "Savor the taste of BBQ chicken with our special pizza topped with grilled chicken, BBQ sauce, and mozzarella cheese.",
                imgSrc: "https://www.dailycommercial.com/gcdn/authoring/2018/10/17/NDAC/ghows-LK-7845b1af-2273-773f-e053-0100007f7abf-c1a7f08b.jpeg?width=660&height=440&fit=crop&format=pjpg&auto=webp",
              },
              {
                title: "Hawaiian",
                description: "Enjoy the sweet and savory combination of ham and pineapple on our Hawaiian pizza, topped with mozzarella cheese.",
                imgSrc: "https://www.statesman.com/gcdn/presto/2021/01/07/NAAS/db760404-db45-482a-bb1c-ad0ff460775e-backspace_roasted_mushroom.pepperoni.margherita_Sweet_Louise_Pho_1.JPG?width=660&height=440&fit=crop&format=pjpg&auto=webp",
              },
              {
                title: "Meat Lover's",
                description: "Indulge in a variety of meats with our Meat Lover's pizza, featuring pepperoni, sausage, ham, and bacon, all topped with mozzarella cheese.",
                imgSrc: "https://www.capecodtimes.com/gcdn/authoring/2014/06/13/NCCT/ghows-CC-86774be2-e63d-43a7-b99f-188799d1019d-bc01cb42.jpeg?width=660&height=440&fit=crop&format=pjpg&auto=webp",
              },
            ].map((product, index) => (
              <div className="col" key={index}>
                <div className="card h-100 border-0 shadow-lg">
                  <img
                    src={product.imgSrc}
                    className="card-img-top rounded-4"
                    alt={product.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">{product.description}</p>
                  </div>
                  <div className="card-footer bg-transparent border-top-0">
                    <small className="text-muted">Last updated 3 mins ago</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default About;

