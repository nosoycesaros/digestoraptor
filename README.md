![Digestoraptor](https://github.com/nosoycesaros/digestoraptor/blob/main/public/digestoraptor.png?raw=true)

Digestoraptor is a mini app for [Perspective](https://www.perspective.co/) built with [Next.js](https://nextjs.org/) solving the instructions for [this work sample](https://perspectiveco.notion.site/Work-Sample-Senior-Frontend-Engineer-Cesar-Zapata-e29ccfa7e0494a63a1af1f89e08eb801).

## Getting Started

First, run the development server:

```bash
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can fed the digestoraptor with any of the json examples provided in our `/public` directory: [classic example](https://github.com/nosoycesaros/digestoraptor/blob/main/public/funnel.json)

Edit the values of the funnel using Digestoraptor's live editor.

## Desired Improvements

This is just a proof of concept, and several improvements weren't implemented due to time constraints. These improvements are essential to make the app production-ready:

### Check Funnel Structure
Create an API route that can assert if the provided `json` has the correct structure to digest.

### Loading States
Use loading states to provide user feedback during funnel processing.

### Full Inline Editor
Due to the SessionStorage persistence is not possible to fully edit the funnel with the inline editor.


Made with 🫀 by [cesaros](https://cesaros.co/)
