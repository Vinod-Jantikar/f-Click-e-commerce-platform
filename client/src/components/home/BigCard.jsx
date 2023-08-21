import { Link } from "react-router-dom";
import styled from "styled-components";
import "../styles/Home.css"

const MainDiv = styled.div`
  border: 1px solid #d1d1d1;
  padding: 2rem;
  div {
    overflow: hidden;
    cursor: pointer;
  }
  h3 {
    padding: 0;
    margin: 0;
    padding-top: 1rem;
    color: #282c3f
  }
  .big_text {
    background-color: white;
    font-size: 1.5rem;
    text-align: center;
  }
`;

export const BigCard = ({ img, txt, link }) => {
  return (
    <div className="section">
      <div className="section_title">
        <h3>Product Category</h3>
      </div>
      <div className="big_card_container">
        <MainDiv className="big_card">
          <Link to="/shop/women">
            <div className="big_img">
              <img src="./assets/women.jpg" alt="Women Clothes" />
            </div>
            <div className="big_text">
              <h3>Women Clothes</h3>
            </div>
          </Link>
        </MainDiv>
        <MainDiv className="big_card">
          <Link to="/shop/women">
            <div className="big_img">
              <img src="./assets/men.jpeg" alt="Men Clothes" />
            </div>
            <div className="big_text">
              <h3>Men Clothes</h3>
            </div>
          </Link>
        </MainDiv>
        <MainDiv className="big_card">
          <Link to="/shop/women">
            <div className="big_img">
              <img  src="./assets/kids.webp" alt="Kids Clothes" />
            </div>
            <div className="big_text">
              <h3>Kids Clothes</h3>
            </div>
          </Link>
        </MainDiv>
      </div>
    </div>
  );
};
