import React from "react";

const Header = () => {
  return (
    <>
      <header className="absolute-header header-area padding-area header-sticky">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div className="col-xl-2 col-lg-2 col-6">
              <div className="logo">
                <a href="index.html">
                  <img src="img/logo/logo.png" alt="logo-image" />
                </a>
              </div>
            </div>

            <div className="col-xl-8 col-lg-8 d-none d-lg-block">
              <nav>
                <ul className="header-menu-list text-center">
                  <li className="active">
                    <a className="drop-icon" href="index.html">
                      home
                    </a>

                    <ul className="ht-dropdown">
                      <li>
                        <a href="index.html">Home Style 1</a>
                      </li>
                      <li>
                        <a href="home-2.html">Home Style 2</a>
                      </li>
                      <li>
                        <a href="home-3.html">Home Style 3</a>
                      </li>
                      <li>
                        <a href="home-4.html">Home Style 4</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="drop-icon" href="shop.html">
                      All Products
                    </a>

                    <ul className="ht-dropdown megamenu">
                      <li>
                        <ul>
                          <li className="menu-tile">Drone Shop</li>
                          <li>
                            <a href="shop.html">Integrated Systems</a>
                          </li>
                          <li>
                            <a href="shop.html">DJI</a>
                          </li>
                          <li>
                            <a href="shop.html">Power Vision</a>
                          </li>
                          <li>
                            <a href="shop.html">Ryze Tech</a>
                          </li>
                          <li>
                            <a href="shop.html">Yuneec</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <ul>
                          <li className="menu-tile">Stroller Shop</li>
                          <li>
                            <a href="shop.html">Joggers</a>
                          </li>
                          <li>
                            <a href="shop.html">Lightweight</a>
                          </li>
                          <li>
                            <a href="shop.html">Prams</a>
                          </li>
                          <li>
                            <a href="shop.html">Standard</a>
                          </li>
                          <li>
                            <a href="shop.html">Travel Systems</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <ul>
                          <li className="menu-tile">smartwatch Shop</li>
                          <li>
                            <a href="shop.html">Men's Watches</a>
                          </li>
                          <li>
                            <a href="shop.html">Ladies Watches</a>
                          </li>
                          <li>
                            <a href="shop.html">Sport Watch</a>
                          </li>
                          <li>
                            <a href="shop.html">Wrist Watches</a>
                          </li>
                          <li>
                            <a href="shop.html">Watch Bands</a>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <ul>
                          <li className="menu-tile">Scooter Shop</li>
                          <li>
                            <a href="shop.html">Pro Scooters</a>
                          </li>
                          <li>
                            <a href="shop.html">Custom Scooters</a>
                          </li>
                          <li>
                            <a href="shop.html">Kids Scooters</a>
                          </li>
                          <li>
                            <a href="shop.html">Dirt Scooters</a>
                          </li>
                          <li>
                            <a href="shop.html">Adult / Commuter Scooters</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="about.html">about us</a>
                  </li>
                  <li>
                    <a href="contact.html">Contact us</a>
                  </li>
                  <li>
                    <a className="drop-icon" href="shop.html">
                      shop
                    </a>

                    <ul className="ht-dropdown">
                      <li>
                        <a href="shop.html">Shop</a>
                      </li>
                      <li>
                        <a href="product-details.html">product details</a>
                      </li>
                      <li>
                        <a href="compare.html">compare</a>
                      </li>
                      <li>
                        <a href="cart.html">cart</a>
                      </li>
                      <li>
                        <a href="checkout.html">checkout</a>
                      </li>
                      <li>
                        <a href="wishlist.html">wishlist</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="drop-icon" href="blog.html">
                      blog
                    </a>

                    <ul className="ht-dropdown blog-dropdown">
                      <li>
                        <a href="blog.html">Blog</a>
                      </li>
                      <li>
                        <a href="blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a className="drop-icon" href="#">
                      pages
                    </a>

                    <ul className="ht-dropdown">
                      <li>
                        <a href="contact.html">contact us</a>
                      </li>
                      <li>
                        <a href="about.html">about us</a>
                      </li>
                      <li>
                        <a href="register.html">register</a>
                      </li>
                      <li>
                        <a href="login.html">Login</a>
                      </li>
                      <li>
                        <a href="404.html">404</a>
                      </li>
                      <li>
                        <a href="forgot-password.html">forgot password</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            <div className="col-xl-2 col-lg-2 col-6">
              <div className="cart-box">
                <ul>
                  <li className="drodown-show">
                    <a href="#">
                      <span className="icon icon-Search"></span>
                    </a>
                    <div className="dropdown categorie-search-box">
                      <form action="#">
                        <input
                          type="text"
                          name="search"
                          placeholder="Search our catalog"
                        />
                        <button>
                          <span className="icon icon-Search"></span>
                        </button>
                      </form>
                    </div>
                  </li>

                  <li className="drodown-show">
                    <a href="#">
                      <span className="icon icon-FullShoppingCart"></span>
                      <span className="total-pro">2</span>
                    </a>
                    <ul className="dropdown cart-box-width">
                      <li>
                        <div className="single-cart-box">
                          <div className="cart-img">
                            <a href="#">
                              <img src="img/products/p1.jpg" alt="cart-image" />
                            </a>
                            <span className="pro-quantity">1X</span>
                          </div>
                          <div className="cart-content">
                            <h6>
                              <a href="product-details.html">
                                Printed Summer Red{" "}
                              </a>
                            </h6>
                            <span className="cart-price">27.45</span>
                            <span>Size: S</span>
                            <span>Color: Yellow</span>
                          </div>
                          <a className="del-icone" href="#">
                            <i className="ion-close"></i>
                          </a>
                        </div>

                        <div className="single-cart-box">
                          <div className="cart-img">
                            <a href="#">
                              <img src="img/products/p2.jpg" alt="cart-image" />
                            </a>
                            <span className="pro-quantity">1X</span>
                          </div>
                          <div className="cart-content">
                            <h6>
                              <a href="product-details.html">
                                Printed Round Neck
                              </a>
                            </h6>
                            <span className="cart-price">45.00</span>
                            <span>Size: XL</span>
                            <span>Color: Green</span>
                          </div>
                          <a className="del-icone" href="#">
                            <i className="ion-close"></i>
                          </a>
                        </div>

                        <div className="cart-footer">
                          <ul className="price-content">
                            <li>
                              Subtotal
                              <span>$57.95</span>
                            </li>
                            <li>
                              Shipping
                              <span>$7.00</span>
                            </li>
                            <li>
                              Taxes
                              <span>$0.00</span>
                            </li>
                            <li>
                              Total
                              <span>$64.95</span>
                            </li>
                          </ul>
                          <div className="cart-actions text-center">
                            <a className="cart-checkout" href="checkout.html">
                              Checkout
                            </a>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className="drodown-show">
                    <a href="#">
                      <span className="icon icon-Settings"></span>
                    </a>

                    <ul className="dropdown cart-box-width currency-selector">
                      <li>
                        <h3>My Account </h3>
                        <ul>
                          <li>
                            <a href="register.html">Register</a>
                          </li>
                          <li>
                            <a href="login.html">Login</a>
                          </li>
                          <li>
                            <a href="account.html">My Account</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h3>Currency: USD</h3>
                        <ul>
                          <li>
                            <a href="#">€ Euro</a>
                          </li>
                          <li>
                            <a href="#">£ Pound Sterling</a>
                          </li>
                          <li>
                            <a href="#">$ US Dollar</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <h3>Language: EN-GB</h3>
                        <ul>
                          <li>
                            <a href="#">
                              <img src="img/header/1.jpg" alt="lang-icon" />{" "}
                              English
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <img src="img/header/2.jpg" alt="lang-icon" />{" "}
                              Germany
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mobile-menu d-block d-lg-none">
            <nav>
              <ul>
                <li>
                  <a href="index.html">home</a>

                  <ul>
                    <li>
                      <a href="index.html">Home Style 1</a>
                    </li>
                    <li>
                      <a href="home-2.html">Home Style 2</a>
                    </li>
                    <li>
                      <a href="home-3.html">Home Style 3</a>
                    </li>
                    <li>
                      <a href="home-4.html">Home Style 4</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">All Products</a>

                  <ul className="submobile-mega-dropdown">
                    <li>
                      <a href="#">Dron Shope</a>

                      <ul>
                        <li>
                          <a href="shop.html">Integrated Systems</a>
                        </li>
                        <li>
                          <a href="shop.html">DJI</a>
                        </li>
                        <li>
                          <a href="shop.html">Power Vision</a>
                        </li>
                        <li>
                          <a href="shop.html">Ryze Tech</a>
                        </li>
                        <li>
                          <a href="shop.html">Yuneec</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Stroller Shop</a>

                      <ul>
                        <li>
                          <a href="shop.html">Joggers</a>
                        </li>
                        <li>
                          <a href="shop.html">Lightweight</a>
                        </li>
                        <li>
                          <a href="shop.html">Prams</a>
                        </li>
                        <li>
                          <a href="shop.html">Standard</a>
                        </li>
                        <li>
                          <a href="shop.html">Travel Systems</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">smartwatch Shop</a>

                      <ul>
                        <li>
                          <a href="shop.html">Men's Watches</a>
                        </li>
                        <li>
                          <a href="shop.html">Ladies Watches</a>
                        </li>
                        <li>
                          <a href="shop.html">Sport Watch</a>
                        </li>
                        <li>
                          <a href="shop.html">Wrist Watches</a>
                        </li>
                        <li>
                          <a href="shop.html">Watch Bands</a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a href="#">Scooter Shop</a>

                      <ul>
                        <li>
                          <a href="shop.html">Pro Scooters</a>
                        </li>
                        <li>
                          <a href="shop.html">Custom Scooters</a>
                        </li>
                        <li>
                          <a href="shop.html">Kids Scooters</a>
                        </li>
                        <li>
                          <a href="shop.html">Dirt Scooters</a>
                        </li>
                        <li>
                          <a href="shop.html">Adult / Commuter Scooters</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">shop</a>

                  <ul>
                    <li>
                      <a href="shop.html">Shop</a>
                    </li>
                    <li>
                      <a href="product-details.html">product details</a>
                    </li>
                    <li>
                      <a href="compare.html">compare</a>
                    </li>
                    <li>
                      <a href="cart.html">cart</a>
                    </li>
                    <li>
                      <a href="checkout.html">checkout</a>
                    </li>
                    <li>
                      <a href="wishlist.html">wishlist</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">Blog</a>

                  <ul>
                    <li>
                      <a href="blog.html">blog</a>
                    </li>
                    <li>
                      <a href="blog-details.html">Blog Details</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">pages</a>

                  <ul>
                    <li>
                      <a href="about.html">about us</a>
                    </li>
                    <li>
                      <a href="account.html">My account</a>
                    </li>
                    <li>
                      <a href="register.html">register</a>
                    </li>
                    <li>
                      <a href="login.html">Login</a>
                    </li>
                    <li>
                      <a href="404.html">404</a>
                    </li>
                    <li>
                      <a href="forgot-password.html">forgot password</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">About Us</a>
                </li>
                <li>
                  <a href="contact.html">Contact Us</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
