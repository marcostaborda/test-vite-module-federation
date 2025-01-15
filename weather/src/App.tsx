import { Box, Typography } from "@mui/material";

function App() {
  return (
    <Box sx={{ backgroundColor: "#0C1D2D", padding: 2, marginTop: 2 }}>
      <Typography variant="h5" color="white" align="center">
        Previsão do Tempo
      </Typography>
      <Typography variant="h6" color="white" align="center">
        Sol, 28°C
      </Typography>
      <Typography variant="body1" color="white" align="center">
        A previsão do tempo para hoje é ensolarada com temperaturas variando
        entre 20°C e 30°C.
      </Typography>
    </Box>
  );
}

export default App;
