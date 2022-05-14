import styled from "styled-components";

export const MainButton = styled.a`
  margin-top: 20px;
  font-size: 1.8rem;
  background: #ee0979;
  background: -webkit-linear-gradient(to right, #ff6a00, #ee0979);
  background: linear-gradient(to right, #ff6a00, #ee0979);
  padding: 10px 20px;
  text-decoration: none;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.4s ease-in-out;
  position: relative;
  text-align: center;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    background: #ff00cc;
    background: -webkit-linear-gradient(to right, #333399, #ff00cc);
    background: linear-gradient(to right, #333399, #ff00cc);
    transition: all 0.4s ease-in-out;
    border-radius: 4px;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }

  &::before {
    content: "Explore";
    text-align: center;
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 20px;
    background: transparent;
    border-radius: 4px;
    z-index: 2;
  }

  @media screen and (max-width: 480px) {
    margin: 2.5rem 0;
  }
`;
