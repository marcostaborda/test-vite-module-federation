import { Card, CardContent, CardMedia, Grid2, Typography } from "@mui/material";

const adData = [
  {
    title: "Assine o Jornal",
    description: "Receba as notícias mais recentes diretamente no seu e-mail.",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/002/761/275/non_2x/breaking-news-icon-doodle-hand-drawn-or-outline-icon-style-vector.jpg",
  },
  {
    title: "Edição Digital",
    description:
      "Acesse o conteúdo completo do jornal a qualquer hora e em qualquer lugar.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR6ADxslz1gZrTiqgKfdcbbDF_RtSJsEIDsA&s",
  },
  {
    title: "Clube Jornal",
    description: "Benefícios exclusivos para assinantes do Jornal.",
    imageUrl:
      "https://dubbashop.s3.us-east-2.amazonaws.com/products/4-produto-assinatura-digital-clube-do-assinante-assinatura-digital-para-presentear-drink-sortido-da-aptk-100ml_1.png",
  },
  {
    title: "Rádio Jornal",
    description:
      "Fique por dentro das notícias em tempo real com a nossa rádio online.",
    imageUrl:
      "https://taaqui.org/blog/wp-content/uploads/2018/12/o-que-e-radio-online.png",
  },
];

function App() {
  return (
    <Grid2 container spacing={2} my={2}>
      {adData.map((ad) => (
        <Grid2 size={{ xs: 12, md: 6 }} key={ad.title}>
          <Card>
            <CardMedia
              component="img"
              height="140"
              image={ad.imageUrl}
              alt={ad.title}
            />
            <CardContent>
              <Typography variant="h6">{ad.title}</Typography>
              <Typography variant="body2" color="text.secondary">
                {ad.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
}

export default App;
