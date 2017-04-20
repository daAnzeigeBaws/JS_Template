# JS_Template
This is a template for any JavaScript project. It features a basic setup and a complete unit testing environment.

The architecture of the project is a single page application (SPA), which is the setup of a modern web site.
Therefor the JavaScript files are the following:

| File           | Purpose |
| -------------- | ------- |
| contents.js    | This handles the dynamic HTML content generation |
| core.js        | This functions as an interface between the HTML page and the JavaScript logic |
| httpRequest.js | This handles all the HTTP requests |
| routing.js     | This takes care of the routing and navigation on the site, including a user friendly URI management |

All the implementations are stubs only but work just fine on themselves. Additionally this application does not rely
on any functional framework, Bootstrap is used though.
As this project is intended to be as light weighted and performing as possible the usage of frameworks is not directly
supported.

The testing is realized with Jasmine.
For further information refer to the official [Jasmine documentation](https://jasmine.github.io/2.5/introduction).
