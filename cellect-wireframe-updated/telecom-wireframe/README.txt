TELECOMMUNICATIONS WIREFRAME — NO-INSTALL BROWSER VERSION

HOW TO OPEN
1. Extract the entire ZIP into a folder on your computer.
2. Double-click index.html, or right-click it and choose Open with Chrome,
   Edge, Firefox or Safari.
3. Use the navigation to view all seven pages.

Do not open index.html from inside the ZIP. Keep the extracted files together.
No terminal, Bun, Node.js, package install, API key or web server is required.
The font files are bundled, so this version works offline too.

FILES
index.html   Browser entry point and initial Home markup.
styles.css   All styling, including responsive layouts and local font declarations.
pages.js     Readable HTML templates for seven pages and prototype previews.
app.js       Plain JavaScript navigation and local interactions.
fonts/       Local Poppins font files (see FONT-LICENSE.txt).

EDITING
Open these files in any text editor (VS Code, Notepad++, etc.).
Edit pages.js for page layouts, styles.css for appearance, and app.js for behavior.
Refresh your browser after saving. The Home markup in index.html is a no-JavaScript
fallback; when JavaScript is enabled, the Home template in pages.js is used.

NAVIGATION
Pages use #/ routes so navigation and browser Back/Forward work without a server.
Example: index.html#/devices

WHAT IS INCLUDED
Home, Deals, Devices, Upgrades, Store Locator, Y'ello Trader and Contact.
Shared navigation/footer, hero carousel, catalogue filters/pagination/previews,
upgrades preview form, placeholder store search/map/list, publication viewer,
contact preview form and expandable placeholder questions.

This is a wireframe, not a production telecommunications website. All products,
locations, publications and eligibility results are placeholders. No messages
or personal information are transmitted or saved. No external libraries are loaded.

This is a separate static conversion. The earlier React/Bun project is unchanged.
TypeScript is not needed: browsers run this JavaScript directly without compilation.