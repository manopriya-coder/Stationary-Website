import React from "react";
import "../Leftside/Leftside.css";
import leftBanner from '../../../assets/sideBanner.jpg'

const Leftside = () => {
  return (
    <div className="mainLeft">
      <div className="subLeft">
        <h4>Categories</h4>
        <div className="category">
          <div className="categoryGrid">
            <div className="catGrid">
              <div className="input">
                <input type="checkbox" />
                <p>Art</p>
              </div>
              <div className="count">
                <p>(12)</p>
              </div>
            </div>
            <div className="catGrid">
              <div className="input">
                <input type="checkbox" />
                <p>Baby stoller</p>
              </div>
              <div className="count">
                <p>(16)</p>
              </div>
            </div>
            <div className="catGrid">
              <div className="input">
                <input type="checkbox" />
                <p>Ballpen</p>
              </div>
              <div className="count">
                <p>(39)</p>
              </div>
            </div>
            <div className="catGrid">
              <div className="input">
                <input type="checkbox" />
                <p>Balance sneaker</p>
              </div>
              <div className="count">
                <p>(12)</p>
              </div>
            </div>
            <div className="catGrid">
              <div className="input">
                <input type="checkbox" />
                <p>Blood pressure</p>
              </div>
              <div className="count">
                <p>(12)</p>
              </div>
            </div>
            <div className="catGrid">
              <div className="input">
                <input type="checkbox" />
                <p>Books</p>
              </div>
              <div className="count">
                <p>(16)</p>
              </div>
            </div>
            <div className="catGrid">
              <div className="input">
                <input type="checkbox" />
                <p>Bowl</p>
              </div>
              <div className="count">
                <p>(8)</p>
              </div>
            </div>
            <div className="catGrid">
              <div className="input">
                <input type="checkbox" />
                <p>Calculator</p>
              </div>
              <div className="count">
                <p>(6)</p>
              </div>
            </div>
            <div className="catGrid">
              <div className="input">
                <input type="checkbox" />
                <p>Canva painting</p>
              </div>
              <div className="count">
                <p>(16)</p>
              </div>
            </div>
            <div className="catGrid">
              <div className="input">
                <input type="checkbox" />
                <p>Children's book</p>
              </div>
              <div className="count">
                <p>(24)</p>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="filterCount">
          <h4>Filter</h4>
          <p>241 Products</p>
        </div>
        <hr />
        <div className="availability">
          <h4>Availability</h4>
          <div className="selectContainer">
            <p className="select">0 Selected</p>
            <p className="reset">Reset</p>
          </div>
          <div className="stock">
            <div className="inputStock">
              <input type="checkbox" />
              <p>In stock</p>
            </div>
            <div className="countStock">
              <p>(12)</p>
            </div>
          </div>
          <div className="stock">
            <div className="inputStock">
              <input type="checkbox" />
              <p>Out of stock</p>
            </div>
            <div className="countStock">
              <p>(12)</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="colorSection">
          <h4>Color Section</h4>
          <div className="selectContainer">
            <p className="select">0 Selected</p>
            <p className="reset">Reset</p>
          </div>
          <div className="colorCategory">
            <div className="categoryGrid">
              <div className="colorGrid">
                <div className="inputColor">
                  <div className="color1"></div>
                  <p>Black</p>
                </div>
                <div className="countColor">
                  <p>(12)</p>
                </div>
              </div>
              <div className="colorGrid">
                <div className="inputColor">
                  <div className="color2"></div>
                  <p>Pink</p>
                </div>
                <div className="countColor">
                  <p>(12)</p>
                </div>
              </div>
              <div className="colorGrid">
                <div className="inputColor">
                  <div className="color3"></div>
                  <p>Brown</p>
                </div>
                <div className="countColor">
                  <p>(12)</p>
                </div>
              </div>
              <div className="colorGrid">
                <div className="inputColor">
                  <div className="color4"></div>
                  <p>Light Brown</p>
                </div>
                <div className="countColor">
                  <p>(12)</p>
                </div>
              </div>
              <div className="colorGrid">
                <div className="inputColor">
                  <div className="color5"></div>
                  <p>Blue</p>
                </div>
                <div className="countColor">
                  <p>(12)</p>
                </div>
              </div>
              <div className="colorGrid">
                <div className="inputColor">
                  <div className="color6"></div>
                  <p>Sky Blue</p>
                </div>
                <div className="countColor">
                  <p>(12)</p>
                </div>
              </div>
              <div className="colorGrid">
                <div className="inputColor">
                  <div className="color7"></div>
                  <p>Cyan</p>
                </div>
                <div className="countColor">
                  <p>(12)</p>
                </div>
              </div>
              <div className="colorGrid">
                <div className="inputColor">
                  <div className="color8"></div>
                  <p>Voilet</p>
                </div>
                <div className="countColor">
                  <p>(12)</p>
                </div>
              </div>
              <div className="colorGrid">
                <div className="inputColor">
                  <div className="color9"></div>
                  <p>Grey</p>
                </div>
                <div className="countColor">
                  <p>(12)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="sizeDiv">
          <h4>Size</h4>
          <div className="selectContainer">
            <p className="select">0 Selected</p>
            <p className="reset">Reset</p>
          </div>
          <div className="sizeCategory">
            <div className="categoryGrid">
              <div className="catGrid">
                <div className="input">
                  <input type="checkbox" />
                  <p>XS</p>
                </div>
                <div className="count">
                  <p>(12)</p>
                </div>
              </div>
              <div className="catGrid">
                <div className="input">
                  <input type="checkbox" />
                  <p>S</p>
                </div>
                <div className="count">
                  <p>(16)</p>
                </div>
              </div>
              <div className="catGrid">
                <div className="input">
                  <input type="checkbox" />
                  <p>M</p>
                </div>
                <div className="count">
                  <p>(39)</p>
                </div>
              </div>
              <div className="catGrid">
                <div className="input">
                  <input type="checkbox" />
                  <p>L</p>
                </div>
                <div className="count">
                  <p>(12)</p>
                </div>
              </div>
              <div className="catGrid">
                <div className="input">
                  <input type="checkbox" />
                  <p>XL</p>
                </div>
                <div className="count">
                  <p>(12)</p>
                </div>
              </div>
              <div className="catGrid">
                <div className="input">
                  <input type="checkbox" />
                  <p>XXL</p>
                </div>
                <div className="count">
                  <p>(16)</p>
                </div>
              </div>
              <div className="catGrid">
                <div className="input">
                  <input type="checkbox" />
                  <p>100 gm</p>
                </div>
                <div className="count">
                  <p>(8)</p>
                </div>
              </div>
              <div className="catGrid">
                <div className="input">
                  <input type="checkbox" />
                  <p>150 gm</p>
                </div>
                <div className="count">
                  <p>(6)</p>
                </div>
              </div>
              <div className="catGrid">
                <div className="input">
                  <input type="checkbox" />
                  <p>250 gm</p>
                </div>
                <div className="count">
                  <p>(16)</p>
                </div>
              </div>
              <div className="catGrid">
                <div className="input">
                  <input type="checkbox" />
                  <p>A2</p>
                </div>
                <div className="count">
                  <p>(24)</p>
                </div>
              </div>
              <div className="catGrid">
                <div className="input">
                  <input type="checkbox" />
                  <p>A3</p>
                </div>
                <div className="count">
                  <p>(24)</p>
                </div>
              </div>
              <div className="catGrid">
                <div className="input">
                  <input type="checkbox" />
                  <p>A4</p>
                </div>
                <div className="count">
                  <p>(24)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="leftBanner">
          <img src={leftBanner} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Leftside;
