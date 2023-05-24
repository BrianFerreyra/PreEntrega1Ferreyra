import { Box, Button } from "@mui/material";
import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
const Navbar = () => {
  const [contador, setcontador] = useState(0);
  return (
    <Box
      sx={{
        backgroundColor: "#f7f7f7",
        width: "100%",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        listStyle: "none",
        gap: "15px",
        padding: "10px",
      }}
    >
      <h2>IMG</h2>
      <li className="lista">hojas</li>
      <li>cuadernos</li>
      <li>lapices</li>
      <li>mochilas</li>
      <TiShoppingCart color="black" size="35px" />
      <h3
        style={{
          textAlign: "center",
          margin: "10px",
          fontSize: "13px",
          backgroundColor: "red",
          height: "fit-content",
          width: "16px",
          borderRadius: "100%",
          position: "relative",
          top: "-10px",
          left: "-140px",
        }}
      >
        {contador}
      </h3>
      <Button variant="contained" onClick={() => setcontador(contador + 1)}>
        Añadir al carrito
      </Button>
    </Box>
  );
};

export default Navbar;
