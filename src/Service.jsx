import React from 'react';
import SData from './SData';
import Card from './Card';

const Service = () => { 
  return(
    <>
      <div className = 'my-5'>
        <h1 className = 'tab-center text-center'>Our Products  & Services</h1>
        </div>
        <div className = "container -fluid mb-5">
          <div className = 'row'>
            <div className = "col-10 mx-auto">
              <div className = 'row gy-5'>

                {SData.map((val,ind)=>{
                  return <Card

                  key = {ind}
                  imgsrc  = {val.imgsrc}
                  title = {val.title}/>
                })}
                {/* <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
                <Card/> */}
                {/* <div className = 'col-md-4 col-10 mx-auto'>
                  <div class="card">
                    <img class="card-img-top" src= {webpic1} alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div> */}

                {/* <div className = 'col-md-4 col-10 mx-auto'>
                  <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div> */}

                {/* <div className = 'col-md-4 col-10 mx-auto'>
                  <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div> */}

                {/* <div className = 'col-md-4 col-10 mx-auto'>
                  <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div> */}

                {/* <div className = 'col-md-4 col-10 mx-auto'>
                  <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div> */}

                {/* <div className = 'col-md-4 col-10 mx-auto'>
                  <div class="card">
                    <img class="card-img-top" src="..." alt="Card image cap"/>
                    <div class="card-body">
                      <h5 class="card-title">Card title</h5>
                      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                      <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
    </>
  );
}

export default Service;