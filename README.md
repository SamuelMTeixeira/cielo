
<p align="center">
<img src="src/assets/img/logo.svg" width="200" alt="Plataforma Integral de Registros Cirúrgicos">
</p>
<h1 align="center">Cielo Metrics</h1>

## Descrição do Projeto

O Cielo Metrics é um projeto resultante do Bootcamp Cielo da Ada Tech, construído com as tecnologias TypeScript, React e Next.js. Este projeto tem como objetivo principal criar uma aplicação que ofereça análises de alto valor para os clientes finais.

## Instruções de Instalação

Siga as etapas abaixo para configurar e executar o projeto em sua máquina local.

1. Clone este repositório:

```bash
    git clone https://github.com/SamuelMTeixeira/cielo.git cielo-metrics
    cd cielo-metrics
```

2. Instale as dependências:

Escolha um dos seguintes comandos de acordo com o gerenciador de pacotes que você prefere:

```bash
    pnpm install
    # or
    npm install
    # or
    yarn install
```

3. Após concluir as etapas de instalação, você pode iniciar o servidor de desenvolvimento usando o seguinte comando:

```bash
    pnpm dev
    # or
    npm run dev
    # or
    yarn dev
```

Isso iniciará o servidor de desenvolvimento e você poderá acessar o projeto em http://localhost:3000 em seu navegador.


## Referência da API

### Pegar todas as transações

#### Requisição

```http
  GET /api/transactions
```

#### Resposta

```json
{
    "summary":{
        "totalQuantity":1546,
        "totalAmount":313388,
        "totalNetAmount":301847.02,
        "totalAverageAmount":202.71,
        "initialDate":"2021-05-26",
        "finalDate":"2021-05-26"
    },
    "pagination":{
        "pageNumber":60,
        "pageSize":25,
        "totalElements":1546,
        "numPages":62,
        "lastPage":false,
        "firstPage":false
    },
    "items":[
        {
            "id":"114606514478703", 
            "merchantId":"2000463023",
            "paymentNode":485173,
            "cnpjRoot":485116,
            "date":"2021-05-26T12:12:55",
            "paymentType":"Crédito à vista",
            "cardBrand":"Mastercard",
            "authorizationCode":"378216",
            "truncatedCardNumber":"1014",
            "grossAmount":80.0,
            "netAmount":76.88,
            "terminal":"00032668",
            "administrationFee":3.9,
            "channelCode":15,
            "channel":"Super Link / Digitada",
            "withdrawAmount":0.0,
            "minimumMDRAmmount":-3.12,
            "mdrTaxAmount":0.0,
            "mdrFeeAmount":-3.12,
            "status":"Aprovada"
        }
    ]
}
```