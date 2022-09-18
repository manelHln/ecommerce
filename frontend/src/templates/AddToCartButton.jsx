import React, {useState} from "react";
import { RiShoppingBasket2Line } from "react-icons/ri";
import { Button, Grid,  } from "@mui/material";
import "./addToCartBtn.css"


const OtherButtons = () => {
  return(
    <Grid item>
      <Button variant="outlined" className="btn-transition">+</Button>
      <Button variant="outlined" className="btn-transition" sx={{mx:"5px"}}>-</Button>
    </Grid>
  )
}

const AddToCartButton = () => {

  const [buttonState, setButtonState] = useState(false)
  const handleButtonState = () =>{
    setButtonState(true)
  }
  return (<div>{buttonState?<OtherButtons />:<Button
    variant="outlined"
    className="typography add-btn-transition"
    startIcon={<RiShoppingBasket2Line />}
    onClick={handleButtonState}
  >
    Add to cart
  </Button>}
  </div>
      
  );
};

export default AddToCartButton;