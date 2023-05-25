import { Box, TextField, Typography } from "@mui/material";

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
      <Typography variant="h3" color="initial" fontFamily={"Roboto"}>
        {greeting}
      </Typography>
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
