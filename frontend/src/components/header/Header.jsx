import React from "react";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import { hero_bg } from "../../images/Images";
import "./header.css";

export default function Header() {
  return (
    <div
      className="header-container"
      style={{ backgroundImage: `url(${hero_bg})` }}
    >
      <div className="header-content">
        <div id="overlay"></div>
        <p className="header-title">
          Offres incroyables sur une large gamme de produits
        </p>
        <p className="header-text">
          Ne les manquez pas! Des cadeaux pour tous Parcourez notre sélection de
          produits et trouvez le cadeau parfait
        </p>
        <Link to="../shop">
          <div className="header-btn">
            Achetez maintenant <RiShoppingBasket2Line size={25} />
          </div>
        </Link>
      </div>
    </div>
  );
}
