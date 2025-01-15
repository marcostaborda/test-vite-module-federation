import { Box, Typography } from "@mui/material";

export function Header() {
  return (
    <Box sx={{ backgroundColor: "#0C1D2D", padding: 2 }}>
      <Typography variant="h4" color="white" align="center">
        Jornal Online
      </Typography>
    </Box>
  );
}
