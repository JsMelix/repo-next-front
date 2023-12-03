import Image from 'next/image'

export default function Home() {
  return ( <> <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  {/* swiperjs cdn link */}
  <link
    rel="stylesheet"
    href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
  />
  {/* font awesome cdn link */}
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta2/css/all.min.css"
  />
  {/* google font link */}
  <link
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,500;0,700;1,400&family=Poppins:wght@400;500;700&display=swap"
    rel="stylesheet"
  />
  {/* custom css link */}
  <link rel="stylesheet" href="css/style.css" />
  <title>PsychoArt</title>
  {/* header section starts */}
  <header className="header bg-white10">
    <div className="container">
      <a href="#" className="logo bold white">
        Ecoads<span className="lightgreen">Marketplace</span>
      </a>
      <div className="menu">
        <a href="#collections">Productos</a>
        <div className="btn bg-purple wallet" id="connect">
          Seleccionar Wallet
        </div>
        <div className="container">
          {/* <button class="button" id="connectButton"> */}
          {/* Connect wallet */}
          <span id="loading">
            <span>•</span>
            <span>•</span>
            <span>•</span>
          </span>
          {/* <div id="walletID">Your wallet is not connected yet.</div> */}
          <div id="mobileDeviceWarning">
            {/* If you are on a mobile phone, please use MetaMask  */}
            {/* application's browser to connect. */}
          </div>
        </div>
        <title>MetaMask Button</title>
        <button className="button" id="connectButton">
          Conectar a MetaMask
        </button>
        <h2>
          Cuenta: <span id="account" />
        </h2>
        {/* <button class="enableEthereumButton">Enable Ethereum</button> */}
        {/* <h2>Account: <span class="showAccount"></span></h2> */}
      </div>
      <div className="fas fa-wallet" id="wallet" />
      <div className="fas fa-bars" id="bar" />
    </div>
  </header>
  {/* header section ends */}
  {/* home section starts */}
  <section id="home" className="spacetop15 spacebottom10">
    <div className="container">
      <div className="row jc-between ai-center col-reverse-s">
        <div className="col5 col6-md col12-s ta-center-s">
          <h1 className="size5 bold spacebottom1">
            Crea, Compra &amp; Colecciona Tu propio NFT
          </h1>
          <p className="size2 spacebottom3 halfwhite">
            Interactua en nuestros espacios . Crea tu propia Coleccion.
          </p>
          <div className="row col8 col9-md jc-between spacebottom4 jc-evenly-s col12-s">
            <a href="#collections" className="btn bg-purple size2 white ">
              Explorar Ahora
            </a>
            {/* <a href="#banner" class="btn bg-white10 size2 white ">Sell NFT</a> */}
          </div>
          <div className="row jc-between">
            <div className="ta-center">
              <p className="size3 bold">100k+</p>
              <p className="size2 halfwhite">Arte</p>
            </div>
            <div className="ta-center">
              <p className="size3 bold">872k+</p>
              <p className="size2 halfwhite">Espacios</p>
            </div>
            <div className="ta-center">
              <p className="size3 bold">11k+</p>
              <p className="size2 halfwhite">Clientes</p>
            </div>
          </div>
        </div>
        <div className="col6 col12-s spacebottom3-s">
          <img src="img/collage.png" alt="" className="img-responsive float" />
        </div>
      </div>
    </div>
  </section>
  {/* home section ends */}
  {/* partner section starts */}
  <section className="spacer5 spacer0-xs">
    <div className="container row jc-between jc-around-md">
      <img src="img/refi.png" alt="" className="height10 img-responsive-md" />
      <img src="img/push.png" alt="" className="height10 img-responsive-md" />
      <img
        src="img/Polygon.png"
        alt=""
        className="height10 img-responsive-md spacetop1-md"
      />
    </div>
  </section>
  {/* partner section ends */}
  {/* about section starts */}
  <section id="about" className="spacer10">
    <div className="container">
      <h1 className="bold size4 ta-center">Sobre Nosotros</h1>
      <p className="spacebottom3 halfwhite size2 ta-center">
        <br />
      </p>
      <div className="row ai-center jc-between flexcol-s">
        <div className="col5 col10-s spacebottom2-s">
          <img src="img/refi3nft.jpg" className="img-responsive" alt="" />
        </div>
        <div className="col6 col12-s ta-center-s">
          <h3 className="size3 bold">Nuestro Lema</h3>
          <p className="size2 spacetop1 spacebottom3 halfwhite">
            La plataforma que permite a los anunciantes llegar a una audiencia
            compretida mediante la tokenizacion de espacios publicitarios
          </p>
          <a href="#collections" className="btn bg-purple size2 white">
            Explorar Mas
          </a>
        </div>
      </div>
    </div>
  </section>
  {/* about section ends */}
  {/* collections section starts */}
  <section className="collections spacer10" id="collections">
    <div className="container">
      <h1 className="bold size4 ta-center">Colecciones</h1>
      <p className="spacebottom3 halfwhite size2 ta-center">
        {/* Lorem ipsum dolor sit amet, consectetur<br>adipiscing elit. */}
      </p>
      <div className="row spacebottom3 filter-buttons">
        <div className="col3 filter col6-xs spacebottom1-xs" data-filter="all">
          Todos
        </div>
        <div className="col3 filter col6-xs spacebottom1-xs" data-filter="art">
          Comestibles
        </div>
        <div className="col3 filter col6-xs" data-filter="photograpy">
          Ecologicos
        </div>
        <div className="col3 filter col6-xs" data-filter="pattern">
          Agricultura
        </div>
      </div>
      <div className="row box-card jc-evenly-md">
        <div
          className="col4 card collect bg-white10 col5-md col6-s"
          data-item="art"
        >
          <img src="img/page.jpg" className="img-responsive" alt="" />
          <div className="row jc-between spacetop2">
            <div>
              <p className="size2 halfwhite"></p>
              {/* <h5 class="size2 bold">Yellow Red</h5> */}
            </div>
            <div>
              {/* <p class="current halfwhite">Current bid</p> */}
              {/* <h5 class="size2 bold">0.005ETH</h5> */}
            </div>
          </div>
          <a className="bid size2 ta-center">Place a bid</a>
        </div>
        <div
          className="col4 card collect bg-white10 col5-md col6-s"
          data-item="photograpy"
        >
          <img src="img/pag2.jpg" className="img-responsive" alt="" />
          <div className="row jc-between spacetop2">
            <div>
              <p className="size2 halfwhite"></p>
              {/* <h5 class="size2 bold">Yellow Red</h5>
                  </div>
                  <div>
                      <p class="current halfwhite">Current bid</p>
                      <h5 class="size2 bold">0.005ETH</h5> */}
            </div>
          </div>
          <a className="bid size2 ta-center">Place a bid</a>
        </div>
        <div
          className="col4 card collect bg-white10 col5-md col6-s"
          data-item="pattern"
        >
          <img src="img/collection3.png" className="img-responsive" alt="" />
          <div className="row jc-between spacetop2">
            <div>
              <p className="size2 halfwhite"></p>
              {/* <h5 class="size2 bold">Yellow Red</h5>
                  </div>
                  <div>
                      <p class="current halfwhite">Current bid</p>
                      <h5 class="size2 bold">0.005ETH</h5> */}
            </div>
          </div>
          <a className="bid size2 ta-center">Place a bid</a>
        </div>
        <div
          className="col4 card collect bg-white10 col5-md col6-s"
          data-item="photograpy"
        >
          <img src="img/collection5.png" className="img-responsive" alt="" />
          <div className="row jc-between spacetop2">
            <div>
              <p className="size2 halfwhite"></p>
              {/* <h5 class="size2 bold">Yellow Red</h5>
                  </div>
                  <div>
                      <p class="current halfwhite">Current bid</p>
                      <h5 class="size2 bold">0.005ETH</h5> */}
            </div>
          </div>
          <a className="bid size2 ta-center">Place a bid</a>
        </div>
        <div
          className="col4 card collect bg-white10 col5-md col6-s"
          data-item="pattern"
        >
          <img src="img/collection6.png" className="img-responsive" alt="" />
          <div className="row jc-between spacetop2">
            <div>
              <p className="size2 halfwhite"></p>
              <h5 className="size2 bold" />
            </div>
            <div>
              {/* <p class="current halfwhite">Current bid</p>
                      <h5 class="size2 bold">0.005ETH</h5> */}
            </div>
          </div>
          <a className="bid size2 ta-center">Place a bid</a>
        </div>
        <div
          className="col4 card collect bg-white10 col5-md col6-s"
          data-item="art"
        >
          <img src="img/collection7.png" className="img-responsive" alt="" />
          <div className="row jc-between spacetop2">
            <div>
              <p className="size2 halfwhite"></p>
              <h5 className="size2 bold">Yellow Red</h5>
            </div>
            <div>
              {/* <p class="current halfwhite">Current bid</p>
                      <h5 class="size2 bold">0.005ETH</h5> */}
            </div>
          </div>
          <a className="bid size2 ta-center">Place a bid</a>
        </div>
        <div
          className="col4 card collect bg-white10 col5-md col6-s"
          data-item="art"
        >
          <img src="img/collection7.png" className="img-responsive" alt="" />
          <div className="row jc-between spacetop2">
            <div>
              <p className="size2 halfwhite"></p>
              <h5 className="size2 bold">Yellow Red</h5>
            </div>
            <div>
              {/* <p class="current halfwhite">Current bid</p>
                      <h5 class="size2 bold">0.005ETH</h5> */}
            </div>
          </div>
          <a className="bid size2 ta-center">Place a bid</a>
        </div>
        <div
          className="col4 card collect bg-white10 col5-md col6-s"
          data-item="photograpy"
        >
          <img src="img/collection8.png" className="img-responsive" alt="" />
          <div className="row jc-between spacetop2">
            <div>
              <p className="size2 halfwhite"></p>
              <h5 className="size2 bold">Yellow Red</h5>
            </div>
            <div>
              {/* <p class="current halfwhite">Current bid</p>
                      <h5 class="size2 bold">0.005ETH</h5> */}
            </div>
          </div>
          <a className="bid size2 ta-center">Place a bid</a>
        </div>
        <div
          className="col4 card collect bg-white10 col5-md col6-s"
          data-item="pattern"
        >
          <img src="img/collection9.png" className="img-responsive" alt="" />
          <div className="row jc-between spacetop2">
            <div>
              <p className="size2 halfwhite"></p>
              <h5 className="size2 bold">Yellow Red</h5>
            </div>
            <div>
              {/* <p class="current halfwhite">Current bid</p>
                      <h5 class="size2 bold">0.005ETH</h5> */}
            </div>
          </div>
          <a className="bid size2 ta-center">Place a bid</a>
        </div>
      </div>
    </div>
  </section>
  {/* collections section ends */}
  {/* featured section starts */}
  <section className="featured spacer10" id="featured">
    <div className="container">
      <h1 className="bold size4 ta-center">Nuestro Equipo</h1>
      {/* <p class="spacebottom3 halfwhite size2 ta-center">
          Lorem ipsum dolor sit amet, consectetur<br>adipiscing elit.
      </p> */}
      <div className="swiper card-slider row">
        <div className="swiper-wrapper">
          <div className="col4 col5-md col7-s swiper-slide">
            <div className="card bg-white10">
              <img src="img/1.png" className="img-responsive" alt="" />
              <div className="row jc-between spacetop2">
                <div>
                  <p className="size2 halfwhite"></p>
                  {/* <h5 class="size2 bold">Yellow Red</h5> */}
                </div>
                <div>
                  {/* <p class="current halfwhite">Current bid</p>
                              <h5 class="size2 bold">0.005ETH</h5> */}
                </div>
              </div>
              <a className="bid size2 ta-center">Place a bid</a>
            </div>
          </div>
          <div className="col4 col5-md col7-s swiper-slide">
            <div className="card bg-white10">
              <img src="img/2.png" className="img-responsive" alt="" />
              <div className="row jc-between spacetop2">
                <div>
                  <p className="size2 halfwhite"></p>
                  <h5 className="size2 bold" />
                </div>
                <div>
                  {/* <p class="current halfwhite">Current bid</p>
                              <h5 class="size2 bold">0.005ETH</h5> */}
                </div>
              </div>
              <a className="bid size2 ta-center">Place a bid</a>
            </div>
          </div>
          <div className="col4 col5-md col7-s swiper-slide">
            <div className="card bg-white10">
              <img src="img/3.png" className="img-responsive" alt="" />
              <div className="row jc-between spacetop2">
                <div>
                  <p className="size2 halfwhite"></p>
                  <h5 className="size2 bold" />
                </div>
                <div>
                  {/* <p class="current halfwhite">Current bid</p>
                              <h5 class="size2 bold">0.005ETH</h5> */}
                </div>
              </div>
              <a className="bid size2 ta-center">Place a bid</a>
            </div>
          </div>
          <div className="col4 col5-md col7-s swiper-slide">
            <div className="card bg-white10">
              <img src="img/5.png" className="img-responsive" alt="" />
              <div className="row jc-between spacetop2">
                <div>
                  <p className="size2 halfwhite"></p>
                  <h5 className="size2 bold" />
                </div>
                <div>
                  {/* <p class="current halfwhite">Current bid</p>
                              <h5 class="size2 bold">0.005ETH</h5> */}
                </div>
              </div>
              <a className="bid size2 ta-center">Place a bid</a>
            </div>
          </div>
          <div className="col4 col5-md col7-s swiper-slide">
            <div className="card bg-white10">
              <img src="img/4.png" className="img-responsive" alt="" />
              <div className="row jc-between spacetop2">
                <div>
                  <p className="size2 halfwhite"></p>
                  <h5 className="size2 bold" />
                </div>
                <div>
                  {/* <p class="current halfwhite">Current bid</p>
                              <h5 class="size2 bold">0.005ETH</h5> */}
                </div>
              </div>
              <a className="bid size2 ta-center">Place a bid</a>
            </div>
          </div>
          <div className="col4 col5-md col7-s swiper-slide">
            <div className="card bg-white10">
              <img src="img/6.png" className="img-responsive" alt="" />
              <div className="row jc-between spacetop2">
                <div>
                  <p className="size2 halfwhite"></p>
                  <h5 className="size2 bold" />
                </div>
                <div>
                  {/* <p class="current halfwhite">Current bid</p>
                              <h5 class="size2 bold">0.005ETH</h5> */}
                </div>
              </div>
              <a className="bid size2 ta-center">Place a bid</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* featured section ends */}
  {/* creator section starts */}
  {/* <section class="creator spacer10" id="featured">
  <div class="container"> */}
  {/* <h1 class="bold size4 ta-center">Top Creator</h1> */}
  {/* <p class="spacebottom3 halfwhite size2 ta-center"> */}
  {/* Lorem ipsum dolor sit amet, consectetur<br>adipiscing elit. */}
  {/* </p> */}
  {/* <div class="swiper row creator-slider"> */}
  {/* <div class="swiper-wrapper"> */}
  {/* <div class="col4 col5-md col7-s swiper-slide"> */}
  {/* <div class="card-creator bg-white10 ta-center">
                      <img src="img/creator1.png" class="img-responsive" alt="">
                      <img src="img/photo1.png" class="photo" alt="">
                      <h5 class="spacer1 size2 bold">John Wick</h5>
                      <p class="spacebottom2 halfwhite desc">Lorem ipsum dolor sit amet,
                          consectetur<br>adipiscing
                          elit.</p>
                      <button class="follow ta-center bg-purple white">+ Follow</button>
                  </div> */}
  {/* </div>
              <div class="col4 col5-md col7-s swiper-slide">
                  <div class="card-creator bg-white10 ta-center">
                      <img src="img/creator2.png" class="img-responsive" alt="">
                      <img src="img/photo2.png" class="photo" alt="">
                      <h5 class="spacer1 size2 bold">John Wick</h5>
                      <p class="spacebottom2 halfwhite desc">Lorem ipsum dolor sit amet,
                          consectetur<br>adipiscing
                          elit.</p>
                      <button class="follow ta-center bg-purple white">+ Follow</button>
                  </div>
              </div>
              <div class="col4 col5-md col7-s swiper-slide">
                  <div class="card-creator bg-white10 ta-center">
                      <img src="img/creator3.png" class="img-responsive" alt="">
                      <img src="img/photo3.png" class="photo" alt="">
                      <h5 class="spacer1 size2 bold">John Wick</h5>
                      <p class="spacebottom2 halfwhite desc">Lorem ipsum dolor sit amet,
                          consectetur<br>adipiscing
                          elit.</p>
                      <button class="follow ta-center bg-purple white">+ Follow</button> */}
  {/* </div>
              </div> */}
  {/* creator section ends */}
  {/* FAQ section starts */}
  <section className="spacer10" id="faq">
    <div className="container">
      <h1 className="bold size4 ta-center">
        Formulario Contrato
        <br />
      </h1>
      <p className="spacebottom3 halfwhite size2 ta-center">
        {/* Wanna Ask Something? */}
      </p>
      {/* <div class="row jc-between">
          <div class="box-faq col6 col12-s">
              <div class="box spacebottom5">
                  <div class="title row jc-between">
                      <h3 class="size2 halfwhite">Nombre</h3>
                      <i class="fas fa-angle-down size2 halfwhite"></i>
                  </div>
                 <p class="answer size2 spacetop1 "> 
              </div>
              <div class="box spacebottom5">
                  <div class="title row jc-between">
                      <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                      <i class="fas fa-angle-down size2 halfwhite"></i>
                  </div>
                  <p class="answer size2 spacetop1 "></p>
              </div>
              <div class="box spacebottom5">
                  <div class="title row jc-between">
                      <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                      <i class="fas fa-angle-down size2 halfwhite"></i>
                  </div>
                  <p class="answer size2 spacetop1 "><title>Formulario NFT</title>
                  </head>
                  <body class="bg-image">
                  <div class="container bg-white10">
                    <h2>Formulario de Creación de NFT</h2>
                    <form>
                      <label for="nftName">Nombre del NFT:</label><br>
                      <input type="text" id="nftName" name="nftName"><br>
                      <label for="nftDescription">Descripción del NFT:</label><br>
                      <input type="text" id="nftDescription" name="nftDescription"><br>
                      <label for="nftImage">Imagen del NFT:</label><br>
                      <input type="file" id="nftImage" name="nftImage"><br>
                      <button type="submit">Crear NFT</button>
                    </form></p>
              </div>
          </div>
          <div class="box-faq col6 col12-s">
              <div class="box spacebottom5">
                  <div class="title row jc-between">
                      <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                      <i class="fas fa-angle-down size2 halfwhite"></i>
                  </div>
                  <p class="answer size2 spacetop1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates
                      ratione ea officiis ad quam blanditiis, dignissimos adipisci suscipit nobis temporibus
                      molestias fugiat quas possimus assumenda quod quae modi dolorem sed.</p>
              </div>
              <div class="box spacebottom5">
                  <div class="title row jc-between">
                      <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                      <i class="fas fa-angle-down size2 halfwhite"></i>
                  </div>
                  <p class="answer size2 spacetop1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates
                      ratione ea officiis ad quam blanditiis, dignissimos adipisci suscipit nobis temporibus
                      molestias fugiat quas possimus assumenda quod quae modi dolorem sed.</p>
              </div>
              <div class="box spacebottom5">
                  <div class="title row jc-between">
                      <h3 class="size2 halfwhite">Lorem ipsum ipsum?</h3>
                      <i class="fas fa-angle-down size2 halfwhite"></i>
                  </div>
                  <p class="answer size2 spacetop1 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptates
                      ratione ea officiis ad quam blanditiis, dignissimos adipisci suscipit nobis temporibus
                      molestias fugiat quas possimus assumenda quod quae modi dolorem sed.</p> */}
    </div>
  </section>
  {/* FAQ section ends */}
  {/* banner section starts */}
  {/* <section class="spacer10" id="banner">
  <div class="container spacer5 bg-purple ta-center">
      <h1 class="size5 bold spacebottom2 size4-xs">Get ready to collect<br>our NFT</h1>
      <a class="btn bg-halfwhite size2 started ">Get started</a>
  </div>
    </section> */}
  {/* banner section ends */}
  {/* footer section starts */}
  <footer className="spacer10">
    <div className="container row jc-between flexcol-s ta-center-s">
      <div className="row flexcol spacebottom3-s">
        <a href="#home" className="size2 bold white">
          Ecoads<span className="lightgreen">Marketplace</span>
        </a>
        <p className="size2 halfwhite spacetop2">
          El mejor NFT marketplace sitioweb en
          <br />
          el mundo con la mejor experiencia
          <br />
        </p>
      </div>
      <div className="row flexcol spacebottom3-s">
        <a href="#about" className="bold size2 white">
          Sobre Nosotros
        </a>
        <a href="#" className="size2 halfwhite spacetop2">
          Nosotros
        </a>
        <a href="#" className="size2 halfwhite spacetop2">
          Productos
        </a>
        <a href="#" className="size2 halfwhite spacetop2">
          Equipo
        </a>
        {/* <a href="#" class="size2 halfwhite spacetop2">FAQ</a> */}
      </div>
      {/* <div class="row flexcol spacebottom3-s">
          <a href="#" class="bold size2 white">Equipo</a>
          <a href="#" class="size2 halfwhite spacetop2">Our Team</a>
          <a href="#" class="size2 halfwhite spacetop2">Partner With Us</a>
          <a href="#" class="size2 halfwhite spacetop2">Privacy & Policy</a>
          <a href="#" class="size2 halfwhite spacetop2">Features</a> */}
      {/* </div> */}
      <div className="row flexcol spacebottom3-s">
        <h5 className="bold size2">Contact</h5>
        <a href="#" className="size2 halfwhite spacetop2">
          +57 3212426036
        </a>
        <a href="#" className="size2 halfwhite spacetop2">
          ecoadsmarketplace@gmail.com
        </a>
        <div className="row jc-between spacetop2 jc-evenly-s">
          <a href="#" className="fab fa-youtube size2 halfwhite spacetop2" />
          <a href="#" className="fab fa-discord size2 halfwhite spacetop2" />
          <a href="#" className="fab fa-instagram size2 halfwhite spacetop2" />
        </div>
      </div>
    </div>
    {/* <p class="size2 halfwhite spacetop5 ta-center">Created by <span class="white bold">Zarror</span> | All Right */}
    {/* Reserved!</p> */}
  </footer>
  {/* footer section ends */}
  {/* custom js file link */}
</>

   
  )
}
