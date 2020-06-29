import React from "react";
import { Link } from "react-router-dom";

export default function () {
  document.oncontextmenu = function (e) {
    e.preventDefault();
  };
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content />
      <meta name="author" content="_nK" />
      <title>ENIGMAZE</title>
      <link rel="icon" type="image/png" href="assets/images/favicon.png" />
      {/* START: Styles */}
      {/* Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300i,400,400i,700%7cMarcellus+SC"
        rel="stylesheet"
      />
      {/* Bootstrap */}
      <link
        rel="stylesheet"
        href="assets/vendor/bootstrap/dist/css/bootstrap.min.css"
      />
      {/* FontAwesome */}
      {/* IonIcons */}
      <link
        rel="stylesheet"
        href="assets/vendor/ionicons/css/ionicons.min.css"
      />
      {/* Revolution Slider */}
      <link rel="stylesheet" href="assets/vendor/revolution/css/settings.css" />
      <link rel="stylesheet" href="assets/vendor/revolution/css/layers.css" />
      <link
        rel="stylesheet"
        href="assets/vendor/revolution/css/navigation.css"
      />
      {/* Flickity */}
      <link
        rel="stylesheet"
        href="assets/vendor/flickity/dist/flickity.min.css"
      />
      {/* Photoswipe */}
      <link
        rel="stylesheet"
        href="assets/vendor/photoswipe/dist/photoswipe.css"
      />
      <link
        rel="stylesheet"
        href="assets/vendor/photoswipe/dist/default-skin/default-skin.css"
      />
      {/* DateTimePicker */}
      <link
        rel="stylesheet"
        href="assets/vendor/jquery-datetimepicker/build/jquery.datetimepicker.min.css"
      />
      {/* Summernote */}
      <link
        rel="stylesheet"
        href="assets/vendor/summernote/dist/summernote-bs4.css"
      />
      {/* GODLIKE */}
      <link rel="stylesheet" href="assets/css/godlike.min.css" />
      {/* Custom Styles */}
      <link rel="stylesheet" href="assets/css/custom.css" />
      {/* END: Styles */}
      {/* jQuery */}
      {/*
    Additional Classes:
        .nk-page-boxed
*/}
      {/* START: Page Preloader */}
      {/* <div class="nk-preloader">
            Preloader animation
         data-close-... data used for closing preloader
         data-open-...  data used for opening preloader
            <div class="nk-preloader-bg" style="background-color: #000;" data-close-frames="23" data-close-speed="1.2" data-close-sprites="./assets/images/preloader-bg.png" data-open-frames="23" data-open-speed="1.2" data-open-sprites="./assets/images/preloader-bg-bw.png">
            </div>
            <div class="nk-preloader-content">
                <div>
                    <img class="nk-img" src="assets/images/logo.svg" alt="GodLike - Gaming Bootstrap 4 Template" width="170">
                    <div class="nk-preloader-animation"></div>
                </div>
            </div>
            <div class="nk-preloader-skip">Skip</div>
        </div> */}
      {/* END: Page Preloader */}
      {/*
    START: Page Video Background

    Additional Attributes:
        data-video - Youtube/Vimeo/self-hosted video urls.
            self-hosted video example:
            data-video="mp4:./video/local-video.mp4,webm:./video/local-video.webm,ogv:./video/local-video.ogv"
        data-video-loop - loop video (true/false)
        data-video-mute - mute video music (true/false)
        data-video-volume - volume of video music (0-100)
        data-video-start-time - video start time in seconds
        data-video-end-time - video end time in seconds
        data-video-pause-on-page-leave - pause video when the page not in focus (true/false)
*/}
      <div
        className="nk-page-background op-2"
        data-video
        data-video-loop="true"
        data-video-mute="true"
        data-video-volume={0}
        data-video-start-time={0}
        data-video-end-time={0}
        data-video-pause-on-page-leave="true"
        style={{ backgroundImage: 'url("assets/images/image-1.jpg")' }}
      />
      {/* END: Page Background */}
      {/*
    START: Page Audio Background

    Additional Attributes:
        data-audio - URL to audio file
        data-audio-volume - audio volume (0-100)
        data-audio-autoplay - autoplay audio (true/false)
        data-audio-loop - loop audio (true/false)
        data-audio-pause-on-page-leave - pause video when the page not in focus (true/false)
*/}
      <div
        className="nk-page-background-audio d-none"
        data-audio
        data-audio-volume={100}
        data-audio-autoplay="true"
        data-audio-loop="true"
        data-audio-pause-on-page-leave="true"
      />
      {/* END: Page Background */}
      {/* START: Page Border */}
      <div className="nk-page-border">
        <div className="nk-page-border-t" />
        <div className="nk-page-border-r" />
        <div className="nk-page-border-b" />
        <div className="nk-page-border-l" />
      </div>
      {/* END: Page Border */}
      {/*
    START: Navbar

    Additional Classes:
        .nk-navbar-lg
        .nk-navbar-align-center
        .nk-navbar-align-right
        .nk-navbar-overlay-content
        .nk-navbar-light
        .nk-navbar-no-link-effect
*/}
      <nav
        className="nk-navbar nk-navbar-side nk-navbar-left nk-navbar-lg nk-navbar-align-center nk-navbar-overlay-content"
        id="nk-navbar-left"
      >
        <div className="nano">
          <div className="nano-content">
            <div className="nk-nav-table">
              <div className="nk-nav-row">
                <a href="index.html" className="nk-nav-logo">
                  <img src="assets/images/logo.svg" alt="" width={190} />
                </a>
              </div>
              {/*
                    START: Navigation

                    Additional Classes:
                        .nk-nav-row-top
                        .nk-nav-row-center
                        .nk-nav-row-bottom
                */}
              <div className="nk-nav-row nk-nav-row-full nk-nav-row-center">
                <ul className="nk-nav" data-nav-mobile="#nk-nav-mobile">
                  <li className="active nk-drop-item">
                    <a href="index.html"> Home</a>
                  </li>
                  <li className=" ">
                    <a href="#play"> Play</a>
                  </li>
                  <li className=" ">
                    <a href="#info"> Information</a>
                  </li>
                  <li className=" ">
                    <a href="#about"> About Us</a>
                  </li>
                </ul>
              </div>
              {/*
                    END: Navigation
                */}
              <div className="nk-nav-row">
                <div className="nk-nav-footer">
                  {" "}
                  © 2020 Enigmaze
                  <br />
                  All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* END: Navbar */}
      {/* START: Navigation Toggler */}
      <ul className="nk-nav-toggler-right"></ul>
      <ul className="nk-nav-toggler-left">
        <li className="d-lg-none">
          <span
            className="nk-btn nk-btn-lg nk-btn-icon"
            data-nav-toggle="#nk-nav-mobile"
          >
            <span className="icon">
              <span className="nk-icon-burger">
                <span className="nk-t-1" />
                <span className="nk-t-2" />
                <span className="nk-t-3" />
              </span>
            </span>
          </span>
        </li>
      </ul>
      {/* END: Navigation Toggler */}
      {/*
    START: Navbar Mobile

    Additional Classes:
        .nk-navbar-left-side
        .nk-navbar-right-side
        .nk-navbar-lg
        .nk-navbar-overlay-content
        .nk-navbar-light
        .nk-navbar-no-link-effect
*/}
      <div
        id="nk-nav-mobile"
        className="nk-navbar nk-navbar-side nk-navbar-left-side nk-navbar-overlay-content d-lg-none"
      >
        <div className="nano">
          <div className="nano-content">
            <a href="index.html" className="nk-nav-logo">
              <img src="assets/images/logo.svg" alt="" width={90} />
            </a>
            <div className="nk-navbar-mobile-content">
              <ul className="nk-nav">
                {/* Here will be inserted menu from [data-mobile-menu="#nk-nav-mobile"] */}
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* END: Navbar Mobile */}
      <div className="nk-main">
        {/* START: Header Title */}
        {/*
    Additional Classes:
        .nk-header-title-sm
        .nk-header-title-md
        .nk-header-title-lg
        .nk-header-title-xl
        .nk-header-title-full
        .nk-header-title-parallax
        .nk-header-title-parallax-opacity
        .nk-header-title-boxed
*/}
        <div className="nk-header-title nk-header-title-full nk-header-title-parallax nk-header-title-parallax-opacity">
          <div className="bg-image op-4">
            <img
              src="assets/images/video.jpg"
              alt=""
              className="jarallax-img"
            />
          </div>
          <div className="nk-header-table">
            <div className="nk-header-table-cell">
              <div className="container">
                <div className="nk-header-text">
                  <div className="nk-gap-2" />
                  <h1 className="nk-title display-4">MARS</h1>
                  <div className="nk-gap-2" />
                  <a href="/Welcome" className="nk-btn nk-btn-lg">
                    {/*                                <span class="icon ion-playstation"></span>*/}
                    <span
                      className="iconify"
                      data-icon="ion:game-controller-sharp"
                      data-inline="false"
                      style={{ color: "white" }}
                    />

                    <span>PLAY NOW</span>
                  </a>{" "}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <div className="nk-gap-2" />
                  <div className="row">
                    <div className="col-md-8 offset-md-2">
                      {/*                                    <div class="nk-plain-video" data-video="https://www.youtube.com/watch?v=Wb2qjfpOeMo" data-video-thumb="assets/images/video.jpg"></div>*/}
                      <div
                        className="nk-plain-video"
                        data-video="https://www.youtube.com/watch?v=J9wzNNIhC24"
                        data-video-thumb="assets/images/video.jpg"
                      />
                    </div>
                  </div>
                  <div className="nk-gap-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* END: Header Title */}
        {/* START: CTA */}
        <div className="nk-box text-center text-white bg-dark-1" id="play">
          <div className="nk-gap-4" />
          <div className="container">
            <div className="row">
              <div className="col-md-8 text-md-left">
                <h2 className="nk-title">
                  Invite your <strong>Friends</strong>
                </h2>
                <h3 className="nk-sub-title mb-0 text-white op-7">
                  Play as a Team
                </h3>
              </div>
              <div className="col-md-4 text-md-left">
                <div className="nk-gap-2 d-md-none" />
                <a href="/Welcome" className="nk-btn nk-btn-lg">
                  <span>PLAY NOW</span>

                  <span className="icon">
                    <i className="ion-play" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="nk-gap-4" />
        </div>
        {/* END: CTA */}
        {/* START: Features */}
        <div className="container" id="info">
          <div className="nk-gap-4" />
          <div className="row align-items-center">
            <div className="col-lg-8 offset-lg-2">
              <div className="row no-gutters">
                <div className="col-md-6">
                  <div className="nk-box-3 bg-dark-1">
                    <div className="nk-ibox">
                      <div className="nk-ibox-icon nk-ibox-icon-circle">
                        <span className="ion-ios-game-controller-b" />
                      </div>
                      <div className="nk-ibox-cont">
                        <h2 className="nk-ibox-title">Interactive Session</h2>
                        Sample Text.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="nk-box-3 bg-dark-2">
                    <div className="nk-ibox">
                      <div className="nk-ibox-icon nk-ibox-icon-circle">
                        <span className="ion-fireball" />
                      </div>
                      <div className="nk-ibox-cont">
                        <h2 className="nk-ibox-title">Catchy Puzzles</h2>
                        Sample Text.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="nk-box-3 bg-dark-2">
                    <div className="nk-ibox">
                      <div className="nk-ibox-icon nk-ibox-icon-circle">
                        <span className="ion-ribbon-a" />
                      </div>
                      <div className="nk-ibox-cont">
                        <h2 className="nk-ibox-title">Awards</h2>
                        Sample Text.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="nk-box-3 bg-dark-1">
                    <div className="nk-ibox">
                      <div className="nk-ibox-icon nk-ibox-icon-circle">
                        <span className="ion-ios-infinite-outline" />
                      </div>
                      <div className="nk-ibox-cont">
                        <h3 className="nk-ibox-title">
                          Unlimited Possibilities
                        </h3>
                        Sample Text.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="nk-gap-4" />
        </div>
        {/* END: Features */}
        {/* START: Footer */}
        {/*
    Additional Classes:
        .nk-footer-parallax
        .nk-footer-parallax-opacity
*/}
        <footer
          className="nk-footer nk-footer-parallax nk-footer-parallax-opacity"
          id="about"
        >
          <img
            className="nk-footer-top-corner"
            src="assets/images/footer-corner.png"
            alt=""
          />
          <div className="container">
            <div className="nk-gap-2" />
            <div className="nk-footer-logos">
              <a href="https://gamingalaxy.in/" target="_blank">
                <img
                  className="nk-img"
                  src="assets/images/footer-logo-godlike.png"
                  alt=""
                  width={120}
                />
              </a>
              <a href="https://laseradda.in/" target="_blank">
                <img
                  className="nk-img"
                  src="assets/images/footer-logo-yp3.png"
                  alt=""
                  width={120}
                />
              </a>
            </div>
            <div className="nk-gap" />
            <p> © 2020 Gaming Galaxy</p>
            <div className="nk-footer-links">
              <a href="#" className="link-effect">
                Terms of Service
              </a>{" "}
              <span>|</span>{" "}
              <a href="#" className="link-effect">
                Privacy Policy
              </a>
            </div>
            <div className="nk-gap-4" />
          </div>
        </footer>
        {/* END: Footer */}
      </div>
      {/*
    START: Share Buttons
        .nk-share-buttons-left
*/}
      <div className="nk-share-buttons d-none d-md-flex">
        <ul>
          <li>
            <span
              className="nk-share-icon"
              title="Share page on Facebook"
              data-share="facebook"
            >
              <span className="icon fa fa-facebook" />
            </span>
            <span className="nk-share-name">Facebook</span>
          </li>
          <li>
            <span
              className="nk-share-icon"
              title="Share page on Twitter"
              data-share="twitter"
            >
              <span className="icon fa fa-twitter" />
            </span>
            <span className="nk-share-name">Twitter</span>
          </li>
          <li>
            <span
              className="nk-share-icon"
              title="Share page on Google+"
              data-share="google-plus"
            >
              <span className="icon fa fa-google-plus" />
            </span>
            <span className="nk-share-name">Google Plus</span>
          </li>
          {/*
        <li>
            <span class="nk-share-icon" title="Share page on Pinterest" data-share="pinterest">
                <span class="icon fa fa-pinterest"></span>
            </span>
            <span class="nk-share-name">Pinterest</span>
        </li>
        <li>
            <span class="nk-share-icon" title="Share page on LinkedIn" data-share="linkedin">
                <span class="icon fa fa-linkedin"></span>
            </span>
            <span class="nk-share-name">LinkedIn</span>
        </li>
        <li>
            <span class="nk-share-icon" title="Share page on VK" data-share="vk">
                <span class="icon fa fa-vk"></span>
            </span>
            <span class="nk-share-name">Vkontakte</span>
        </li>
        */}
        </ul>
      </div>
      {/*
    START: Side Buttons
        .nk-side-buttons-visible
*/}
      <div className="nk-side-buttons">
        <ul>
          <li>
            <a
              href="https://enigmaze.in"
              target="_blank"
              className="nk-btn nk-btn-lg link-effect-4"
            >
              Keep in Touch
            </a>
          </li>
          <li>
            <span className="nk-btn nk-btn-lg nk-btn-icon nk-bg-audio-toggle">
              <span className="icon">
                <span className="ion-android-volume-up nk-bg-audio-pause-icon" />
                <span className="ion-android-volume-off nk-bg-audio-play-icon" />
              </span>
            </span>
          </li>
          <li className="nk-scroll-top">
            <span className="nk-btn nk-btn-lg nk-btn-icon">
              <span className="icon ion-ios-arrow-up" />
            </span>
          </li>
        </ul>
      </div>
      {/* END: Side Buttons */}
      {/*
    START: Search

    Additional Classes:
        .nk-search-light
*/}
      <div className="nk-search">
        <div className="container">
          <form action="#">
            <fieldset className="form-group nk-search-field">
              <input
                type="text"
                className="form-control"
                id="searchInput"
                placeholder="Search..."
                name="s"
              />
              <label htmlFor="searchInput">
                <i className="ion-ios-search" />
              </label>
            </fieldset>
          </form>
        </div>
      </div>
      {/* END: Search */}
      {/*
    START: Shopping Cart

    Additional Classes:
        .nk-cart-light
*/}
      <div className="nk-cart">
        <div className="nk-gap-2" />
        <div className="container">
          <div className="nk-store nk-store-cart">
            <div className="table-responsive">
              <table className="table nk-store-cart-products">
                <tbody>
                  <tr>
                    <td className="nk-product-cart-thumb">
                      <a href="store-product.html" className="nk-post-image">
                        <img
                          src="assets/images/product-2-sm.png"
                          alt="Men Tshirt"
                          className="nk-img"
                        />
                      </a>
                    </td>
                    <td className="nk-product-cart-title" data-title="Product">
                      <h2 className="nk-post-title h5">
                        <a href="store-product.html">Men Tshirt</a>
                      </h2>
                    </td>
                    <td className="nk-product-cart-price" data-title="Price">
                      {" "}
                      $67.00{" "}
                    </td>
                    <td
                      className="nk-product-cart-quantity"
                      data-title="Quantity"
                    >
                      {" "}
                      1{" "}
                    </td>
                    <td className="nk-product-cart-total" data-title="Total">
                      {" "}
                      $67.00{" "}
                    </td>
                    <td className="nk-product-cart-remove">
                      <a href="#">
                        <span className="ion-trash-b" />
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="nk-product-cart-thumb">
                      <a href="store-product.html" className="nk-post-image">
                        <img
                          src="assets/images/product-4-sm.png"
                          alt="Men Hoodie"
                          className="nk-img"
                        />
                      </a>
                    </td>
                    <td className="nk-product-cart-title" data-title="Product">
                      <h2 className="nk-post-title h5">
                        <a href="store-product.html">Men Hoodie</a>
                      </h2>
                    </td>
                    <td className="nk-product-cart-price" data-title="Price">
                      {" "}
                      $125.00 <del>$145.00</del>
                    </td>
                    <td
                      className="nk-product-cart-quantity"
                      data-title="Quantity"
                    >
                      {" "}
                      2{" "}
                    </td>
                    <td className="nk-product-cart-total" data-title="Total">
                      {" "}
                      $250.00{" "}
                    </td>
                    <td className="nk-product-cart-remove">
                      <a href="#">
                        <span className="ion-trash-b" />
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="nk-gap-2" />
            <div className="nk-cart-total">
              {" "}
              Total <span>$317</span>
            </div>
            <div className="nk-gap-3" />
            <div className="nk-cart-btns">
              <a
                href="store-checkout.html"
                className="nk-btn nk-btn-lg nk-btn-color-main-1 link-effect-4"
              >
                {" "}
                Go to Checkout{" "}
              </a>{" "}
              &nbsp;&nbsp;&nbsp;&nbsp;{" "}
              <a
                href="#"
                className="nk-btn nk-btn-lg link-effect-4 nk-cart-toggle"
              >
                {" "}
                Continue Shopping{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="nk-gap-5" />
      </div>
      {/* END: Shopping Cart */}
      {/*
    START: Sign Form

    Additional Classes:
        .nk-sign-form-light
*/}
      <div className="nk-sign-form">
        <div className="nk-gap-5" />
        <div className="container">
          <div className="row">
            <div className="col-lg-4 offset-lg-4 col-md-6 offset-md-3">
              <div className="nk-sign-form-container">
                <div className="nk-sign-form-toggle h3">
                  <a href="#" className="nk-sign-form-login-toggle active">
                    Log In
                  </a>
                  <a href="#" className="nk-sign-form-register-toggle">
                    Register
                  </a>
                </div>
                <div className="nk-gap-2" />
                {/* START: Login Form */}
                <form className="nk-sign-form-login active" action="#">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Username or Email"
                  />
                  <div className="nk-gap-2" />
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                  />
                  <div className="nk-gap-2" />
                  <div className="form-check float-left">
                    <label className="form-check-label">
                      <input type="checkbox" className="form-check-input" />{" "}
                      Remember Me{" "}
                    </label>
                  </div>
                  <button className="nk-btn nk-btn-color-white link-effect-4 float-right">
                    Log In
                  </button>
                  <div className="clearfix" />
                  <div className="nk-gap-1" />
                  <a className="nk-sign-form-lost-toggle float-right" href="#">
                    Lost Password?
                  </a>
                </form>
                {/* END: Login Form */}
                {/* START: Lost Password Form */}
                <form className="nk-sign-form-lost" action="#">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Username or Email"
                  />
                  <div className="nk-gap-2" />
                  <button className="nk-btn nk-btn-color-white link-effect-4 float-right">
                    Get New Password
                  </button>
                </form>
                {/* END: Lost Password Form */}
                {/* START: Register Form */}
                <form className="nk-sign-form-register" action="#">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="Username"
                  />
                  <div className="nk-gap-2" />
                  <input
                    className="form-control"
                    type="email"
                    placeholder="Email"
                  />
                  <div className="nk-gap-2" />
                  <div className="float-left">
                    A password will be emailed to you.
                  </div>
                  <button className="nk-btn nk-btn-color-white link-effect-4 float-right">
                    Register
                  </button>
                </form>
                {/* END: Register Form */}
              </div>
            </div>
          </div>
        </div>
        <div className="nk-gap-5" />
      </div>
      {/* END: Sign Form */}
      {/* START: Scripts */}
      {/* Object Fit Polyfill */}
      {/* GSAP */}
      {/* Popper */}
      {/* Bootstrap */}
      {/* Sticky Kit */}
      {/* Jarallax */}
      {/* imagesLoaded */}
      {/* Flickity */}
      {/* Isotope */}
      {/* Photoswipe */}
      {/* Typed.js */}
      {/* Jquery Validation */}
      {/* Jquery Countdown + Moment */}
      {/* Hammer.js */}
      {/* NanoSroller */}
      {/* SoundManager2 */}
      {/* DateTimePicker */}
      {/* Revolution Slider */}
      {/* Keymaster */}
      {/* Summernote */}
      {/* GODLIKE */}
      {/* END: Scripts */}
    </div>
  );
}
