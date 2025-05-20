import React from "react";
import "./carousel.css";
import bitso from "../assets/bitso.png"
import cardano from "../assets/cardano.png"
import wanchain from "../assets/wanchain.png"
import iohk from "../assets/iohk.png"
import mlabs from "../assets/mlabs.png"

const images = [
  {id: 1, name: bitso},
  {id: 2, name: cardano}, 
  {id: 3, name: wanchain},
  {id: 4, name: iohk}, 
  {id: 5, name: mlabs}
];

export const Carouselanm = () => {
  return (
      <div className="caro-container">
        <div className="caro-track animate">
          {images.map((i) => {
            return (
              <div className="caro-card">
                <img key={i.id} src={i.name} />
              </div>
            );
          })}
          {images.map((i) => {
            return (
              <div className="caro-card">
                <img key={i.id}  src={i.name} />
              </div>
            );
          })}
        </div>
      </div>
  );
};