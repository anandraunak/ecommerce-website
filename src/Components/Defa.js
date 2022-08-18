
import React from 'react'
import { useState, useEffect } from 'react';




const Defa =  () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchAll = async () => {
      await fetch('https://demo7394057.mockable.io/products').then(response =>
        response.json().then(data => ({
          data: data,
          status: response.status
        })
        ).then(res => {
          // console.log(res.status, res.data.products)
          var defaultList = res.data.products;

          // console.log(productList);
          setList(defaultList);
          console.log(defaultList)



        }));

    }; fetchAll();

  },[])


return(
  <div>{list.map((result) => {
    return (
      <div class="card" style={{ width: "18rem" }}>
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

    );
  })
}</div>);
}


export default Defa