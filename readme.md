# Rails Cryptocurrency API

This is a Trading view app that integrates with express fetches data from various cryptocurrency APIs and provides endpoints for retrieving the latest prices, market caps, and trading volumes of popular cryptocurrencies and nextjs shows fetched data.

## Features

- Fetches data from CoinGecko API.
- Custom endpoint to retrieve top 20 cryptocurrencies with their price, market cap, and 24h trading volume.
- Data is available in JSON format.
- Data is showed with NextJS
  
## Setup

### Prerequisites

To get started with the project, you’ll need the following:

- Node.js (version 18.x or higher)
- npm (for managing JavaScript dependencies)

### Installation and runng project

1. Clone the repository:

   ```bash
   https://github.com/eliancontreras/trading-view.git
2. running backend
   ```bash
   cd trading-view/back
   npm install
   node server.js
3. running frontend
   ```bash
   cd trading-view/front
   npm install
   npm run dev