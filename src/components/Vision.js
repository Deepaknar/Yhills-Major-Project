import React from 'react';

function Vision() {
  return (
    <main>
      <h1 className="visually-hidden">Our Vision</h1>

      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Our Values</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              🍕
            </div>
            <h3 className="fs-2 text-body-emphasis">Our Vision</h3>
            <p>
              At Pizza Paradise, our vision is to bring the joy of delicious,
              high-quality pizza to every table. We aim to create memorable
              dining experiences through our commitment to culinary excellence,
              innovation, and community engagement.
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              🎯
            </div>
            <h3 className="fs-2 text-body-emphasis">Our Goals</h3>
            <p>
              Our goal is to be the leading pizza destination by offering
              exceptional service, diverse menu options, and a welcoming
              atmosphere. We strive to constantly improve our recipes and
              services to meet the evolving tastes and preferences of our
              customers.
            </p>
          </div>
          <div className="feature col">
            <div className="feature-icon d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
              🌟
            </div>
            <h3 className="fs-2 text-body-emphasis">Our Services</h3>
            <p>
              Our services include dine-in, takeout, and delivery options,
              ensuring that you can enjoy Pizza Paradise wherever you are. We
              also offer catering services for events and parties, bringing the
              same great taste and quality to your special occasions.
            </p>
          </div>
        </div>
      </div>

      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Our Specials</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                   "url('https://images.pexels.com/photos/4109122/pexels-photo-4109122.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')"
                   ,
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Margherita Madness
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUq1xhcsHKv5UmtmwGOksYTjGiwP_Z1ZmMbQ&s"
                      alt="Pizza Paradise"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill"></use>
                    </svg>
                    <small>Pizza Paradise</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3"></use>
                    </svg>
                    <small>Daily</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  "url('https://imgs.search.brave.com/Ize3pZySu0XS9y5oqilxIYyOfZm8VqvaNP-Q65K0XHg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTM4/NzQyMjIyL3Bob3Rv/L2NoZWVzeS1wZXBw/ZXJvbmktcGl6emEu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUQxejR4UENzLXFR/SVp5VXFSY0hybnNK/U0p5X1liVUQ5dWRP/clhwaWxOcEk9')",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Pepperoni Perfection
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUq1xhcsHKv5UmtmwGOksYTjGiwP_Z1ZmMbQ&s"
                      alt="Pizza Paradise"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill"></use>
                    </svg>
                    <small>Pizza Paradise</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3"></use>
                    </svg>
                    <small>Weekly</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-bg-dark rounded-4 shadow-lg"
              style={{
                backgroundImage:
                  "url('https://imgs.search.brave.com/DFdp4e9xp7Z8ZolqXpe0xHfzZnqdbQtOr22-1H8tLW4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTQ1/OTcxNTc5OS9waG90/by9waXp6YS13aXRo/LWhhbS1hbmQtY2hl/ZXNlLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1ncFJNVmZx/eTQ0YWc0VGtyb1Q4/V0VlclJvdGxmS2hl/WlF1NmtRa2RobnhR/PQ')",
              }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Veggie Delight
                </h3>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUq1xhcsHKv5UmtmwGOksYTjGiwP_Z1ZmMbQ&s"
                      alt="Pizza Paradise"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center me-3">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#geo-fill"></use>
                    </svg>
                    <small>Pizza Paradise</small>
                  </li>
                  <li className="d-flex align-items-center">
                    <svg className="bi me-2" width="1em" height="1em">
                      <use xlinkHref="#calendar3"></use>
                    </svg>
                    <small>Monthly</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="b-example-divider mb-0"></div>
    </main>
  );
}

export default Vision;
