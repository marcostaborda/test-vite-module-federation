import { Box, Grid2, Paper, Typography } from "@mui/material";

function App() {
  return (
    <Box sx={{ backgroundColor: "#e0e0e0", padding: 2 }} my={2}>
      <Grid2 container spacing={2} justifyContent="center">
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper sx={{ padding: 2, textAlign: "center" }}>
            <Typography variant="body1">Empresa 1</Typography>
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper sx={{ padding: 2, textAlign: "center" }}>
            <Typography variant="body1">Empresa 2</Typography>
          </Paper>
        </Grid2>
        <Grid2 size={{ xs: 12, md: 6 }}>
          <Paper sx={{ padding: 2, textAlign: "center" }}>
            <Typography variant="body1">Empresa 3</Typography>
          </Paper>
        </Grid2>
      </Grid2>
    </Box>
  );
}

export default App;
