import { Box, TextField } from "@mui/material";

export const ItemListContainer = ({ greeting }) => {
  console.log(greeting);
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h3>{greeting}</h3>

      <div>
        <TextField
          id="outlined-basic"
          label="¿Cual es tu nombre?"
          variant="outlined"
        />
      </div>
    </Box>
  );
};
