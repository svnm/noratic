####your code

Make a new directory for our demo module called max-by 

    mkdir max-by
    cd max-by

Now we'll write an index.js with the max-by function:

    module.exports = function (xs, f) {
        return xs.reduce(function (max, x) {
            return f(x) > f(max) ? x : max;
        });
    };

####writing tests

Copy this example into our test/ directory and we'll add some assertions with tape:

	var maxBy = require('../');
	var test = require('tape');

    test('simple comparisons', function (t) {
        var n = maxBy([9,3,4], function (x) { return x % 3 });
        t.equal(n, 4);
        t.end();
    });

First install tape by typing 

	npm install tape
    
then we can run our test with node:

	$ node test/max.js

    # tests 1
    # pass  1
    # ok

Our tests pass!

####testing in local browsers

Now that our test suite is running in node, let's run our test in a local browser.

First install browserify

	npm install -g browserify.

Now you can create your bundle.js

    $ browserify test/*.js > bundle.js

and drop it into a <i>script</i> tag in a <b>test.html</b> file:

Now when you open test.html in a browser, you will see the assertions printed to the debugger window since tape uses console.log()

####using testling

We can first install testling globally

	npm install -g testling
    
then we can do:

	browserify test/max.js | testling

The testling command will spin up a real local browser headlessly and forward the console.log() data directly into our terminal.

####package.json

Now create a package.json file with a "devDependency" entry for tape and a "testling" field with all the browsers you want to run:

    {
      "name": "max-by",
      "version": "0.0.0",
      "main": "index.js",
      "devDependencies": {
        "tape": "~2.4.0"
      },
      "testling": {
        "files": "test/*.js",
        "browsers": [
          "chrome/22..latest",
          "firefox/16..latest",
          "safari/latest",
          "iphone/6",
          "android-browser/latest"
        ]
      },
      "scripts": {
        "test": "tape test/*.js"
      }
    }

The **scripts.test** field lets us run our tests with the simple **npm test** in node:

	$ npm test

####configure the web hook and badge

If you haven't already done so, at this point you should make a new github repository for this max-by module and check your files in.

Visit: https://github.com/$YOUR_USERNAME/max-by/settings/hooks

Under the <b>AVAILABLE SERVICE HOOKS</b> click <b>WebHook URLs</b> add http://git.testling.com as a WebHook URL.

	git push

Now git push your code and your test results will show up at:

https://ci.testling.com/$YOUR_USERNAME/max-by

You can also click the <b>test hook</b> button on the settings/hooks page on github to send a test hook manually.

Now that your tests are running on every commit, you can add a <b>.png</b> to your repo page to get the current badge image: https://ci.testling.com/$YOUR_USERNAME/max-by.png

Now you can put your browser badge in your <i>readme.md</i> with a link to the testling test output :)