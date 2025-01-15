import { Card, CardContent, CardMedia, Grid2, Typography } from "@mui/material";

const newsData = [
  {
    title:
      "Saúde é o tema do primeiro dia de provas do Vestibular e do PSS da UFSM",
    description: "Detalhes sobre o primeiro dia de provas da UFSM.",
    imageUrl:
      "https://wordpress-cms-gc-prod-assets.quero.space/uploads/2019/01/o-que-e-vestibular-1.jpg",
  },
  {
    title:
      "Operação da Brigada Militar resulta na detenção de 49 pessoas por maus-tratos a animais e rinha de galos na região",
    description: "Informações sobre a operação da Brigada Militar.",
    imageUrl:
      "https://suitacdn.cloud-bricks.net/fotos/991914/file/desktop/WhatsApp%20Image%202025-01-12%20at%2010.16.48.jpeg?1736687854",
  },
];

function App() {
  return (
    <Grid2 container spacing={2} my={2}>
      {newsData.map((news) => (
        <Grid2 size={{ xs: 12, md: 6 }} key={news.title}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={news.imageUrl}
              alt={news.title}
            />
            <CardContent>
              <Typography variant="h6">{news.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {news.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default App;
