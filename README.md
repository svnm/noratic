# noratic
noratic is a static site generator using node, react and webpack.

## Example

An example of a static blog is here at [isekivace.nz/noratic](http://isekivace.nz/noratic)

## Installation

`npm install noratic --save`

## Usage

- <b>src folder</b>

add your markdown pages to posts-md

customize the layouts in components.

add some styles and some JavaScript... noratic uses CSS Skeleton for its base styles

- <b>noratic build</b>

run `noratic build` to compile with webpack your `src` to `site` folder. This will compile your es6 modules, minify your styles and add your markdown posts.

react-swipr initializes the swipr on component mount

```node.js express

Your app runs as a very minimal node/express app, from your server.js. You can add any additional middleware if you like. noratic runs with react router so the routing is all done client side, except on the first load.


## License

[MIT](http://opensource.org/licenses/MIT)