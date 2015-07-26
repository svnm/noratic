# noratic
noratic is a static site generator using node, react and webpack.

## Example

An example of a static blog is here at [isekivace.nz/noratic](http://isekivace.nz/noratic)

## Installation

`npm install noratic --save`

## Usage

run `noratic build` to compile with webpack your `src` to `site` folder. This will compile your es6 modules, minify your styles and add your markdown posts.

add your markdown posts to `posts-md/`

customize the layouts in `components/`

add some styles and some JavaScript... in `public.` noratic uses CSS Skeleton for its base styles

Your site runs as a minimal node/express app. You can add any additional middleware if you like. noratic routes client side with react router.

## License

[MIT](http://opensource.org/licenses/MIT)
