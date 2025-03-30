const { JSDOM } = require('jsdom');

const dom = new JSDOM(`
  <!DOCTYPE html>
  <html>
    <body>
      <button id="startGame"></button>
      <div id="chessboard"></div>
      <div id="promotionModal"></div>
      <!-- Add other required elements from your HTML -->
    </body>
  </html>
`, { url: 'http://localhost' });

global.window = dom.window;
global.document = dom.window.document;
global.navigator = dom.window.navigator;