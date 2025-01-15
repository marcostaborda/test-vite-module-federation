# React - Vite Federation Demo

Este exemplo demonstra o consumo de módulos federados a partir de um bundle Vite. O `host` (baseado em React) depende de componentes expostos pelos aplicativos remotos, como `ads`, `news`, `sponsors` e `weather`.

## Pacotes

- **host**
- **ads**
- **news**
- **sponsors**
- **weather**

## Executando

Instale o `pnpm` seguindo as instruções disponíveis [aqui](https://pnpm.io/installation).

Depois, execute os seguintes comandos:

1. `pnpm install`
2. `pnpm run build`
3. `pnpm run serve`

Isso irá construir e servir os pacotes `host` e `remotes` (ads, news, sponsors, weather) nas seguintes portas:

- **HOST**: [localhost:5000](http://localhost:5000/)
- **NEWS**: [localhost:5001](http://localhost:5002/)
- **ADS**: [localhost:5002](http://localhost:5001/)
- **SPONSORS**: [localhost:5003](http://localhost:5003/)
- **WEATHER**: [localhost:5004](http://localhost:5004/)

> **Nota**: Use `CTRL + C` para parar apenas o servidor do host. Para parar todos os serviços, execute o comando:

```bash
pnpm stop
```
