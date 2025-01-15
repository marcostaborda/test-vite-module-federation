import NewsSection from "news/App";
import Advertisement from "ads/App";
import AdvertisersSection from "sponsors/App";
import WeatherSection from "weather/App";

import { Header } from "./components/Header";
import { Container, Divider, Typography } from "@mui/material";

function App() {
  return (
    <Container maxWidth="lg">
      <Header />
      <Divider>
        <Typography variant="h5">Propaganda</Typography>
      </Divider>
      <Advertisement />
      <Divider>
        <Typography variant="h5">Noticias</Typography>
      </Divider>
      <NewsSection />
      <Divider>
        <Typography variant="h5">Anunciantes</Typography>
      </Divider>
      <AdvertisersSection />
      <WeatherSection />
    </Container>
  );
}

export default App;
