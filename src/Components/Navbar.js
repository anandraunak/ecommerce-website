import React from 'react'
import { useState, useEffect } from 'react';
import Defa from './Defa';

// import  "./Navbar.css"

function Navbar() {
  const [term, setTerm] = useState('');
  const [result, setResult] = useState([]);
  const [test, setTest] = useState(false);



  const handleSearch = async (val) => {
    setTerm(val);
    if (term) {
      // const resp= await fetch(`https://demo7394057.mockable.io/products`);
      // const data=resp.object.json();
      // console.log(data.);
      await fetch('https://demo7394057.mockable.io/products').then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        })
        ).then(res => {
          // console.log(res.status, res.data.products)
          var productList = res.data.products.filter(
            (p) => p.brand.toLowerCase().includes(term.toLowerCase()) ||
              p.category.toLowerCase().includes(term.toLowerCase()) ||
              p.productName.toLowerCase().includes(term.toLowerCase()));

          // console.log(productList);
          setResult(productList);
          console.log(productList)
          setTest(true);




        }));







    }
  }










  return (
    <>
      <div id="Navbar">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
          <a class="navbar-brand" href="#">Clipkart</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
              <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Filters
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <div className='drop' onClick={() => { handleSearch("shoes"); }}>
                    Shoes

                  </div>
                  <div onClick={() => { handleSearch("watches"); }}>
                    Watches
                  </div>
                  <div onClick={() => { handleSearch("casual shoes"); }}>
                    Casual shoes

                  </div>
                  <div onClick={() => { handleSearch("jackets"); }}>
                    Jackets

                  </div>
                  <div onClick={() => { handleSearch("flip flops"); }}>
                    flip flops
                  </div>
                  {/* <input type="checkbox" id="Shoes" name="check" value="Shoes" />
                  <label for="vehicle1"> Shoes</label><br />

                  <input type="checkbox" id="Watches" name="check" value="Watches" />
                  <label for="vehicle1"> Watches</label><br />

                  <input type="checkbox" id="Jackets" name="check" value="Jackets" />
                  <label for="vehicle1">Jackets</label><br />

                  <input type="checkbox" id="Flip Flops" name="check" value="Flip Flops" />
                  <label for="vehicle1">Flip Flops</label><br />

                  <input type="checkbox" id="Casual shoes" name="check" value="Casual Shoes" />
                  <label for="vehicle1">Casual Shoes</label><br /> */}

                  {/* <a class="dropdown-item" href="#">Action</a>
                  <a class="dropdown-item" href="#">Another action</a> */}
                  <div class="dropdown-divider"></div>
                  {/* <a class="dropdown-item" href="#">Something else here</a> */}
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input onChange={(e) => setTerm(e.target.value)} class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button onClick={(e) => { e.preventDefault(); handleSearch(); }} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
      </div>


      {test ? (result.length > 0 && <ul>{
        result.map((result) => {
          return (
            <div className=" d-flex justify-content-between" >
              <div class="card d-flex justify-content-between" style={{ width: "18rem" }}>
              <img className="card-img-top" src={result.searchImage} alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">{result.productName}</h5>
                <p className="card-text">{result.gender}</p>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">{result.brand}</li>
                <li className="list-group-item">{result.discountDisplayLabel}</li>
                <li className="list-group-item">{result.price}</li>
              </ul>

            </div>
            </div>
            
          )

        })}</ul>) : <Defa />}






    </>


  )
}

export default Navbar