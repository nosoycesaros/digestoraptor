<img src="https://github.com/nosoycesaros/digestoraptor/blob/main/public/digestoraptor.png?raw=true" width="100">

Digestoraptor is a mini app for [Perspective](https://www.perspective.co/) built with [Next.js](https://nextjs.org/) solving the instructions for [this work sample](https://perspectiveco.notion.site/Work-Sample-Senior-Frontend-Engineer-Cesar-Zapata-e29ccfa7e0494a63a1af1f89e08eb801).

## ☝️ Getting Started

1️⃣ Run the development server `bun dev`

2️⃣ Open [`http://localhost:3000`](http://localhost:3000) in your desired browser

3️⃣ Ready to digest!

## 🧑‍💻 Usage

### Digest
You can fed the digestoraptor with any of the json examples provided in our `/public` directory:
* [classic example](https://github.com/nosoycesaros/digestoraptor/blob/main/public/funnel.json)

### Live Editor
Edit the values of the funnel using Digestoraptor's live editor.

https://github.com/nosoycesaros/digestoraptor/assets/5192755/23a79080-8fa5-4a16-9e4b-0a7b2cb1e08c

## 🚀 Desired Improvements

This is just a proof of concept, and several improvements weren't implemented due to time constraints. These improvements are essential to make the app production-ready:

### Check Funnel Structure
Create an API route that can assert if the provided `json` has the correct structure to digest.

### Loading States
Use loading states to provide user feedback during funnel processing.

### Full Inline Editor
Due to the SessionStorage persistence is not possible to fully edit the funnel with the inline editor.

### Minor Changes
* Correct usage of `<Image />` component inside `<ImageBlock />`


Made with 🫀 by [cesaros](https://cesaros.co/)
