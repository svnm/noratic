###Promises cheat sheet

A promise is always in either one of three mutually exclusive states:

- Before the result is ready, the promise is <i>pending</i>.
- If a result is available, the promise is <i>fulfilled</i>.
- If an error happened, the promise is <i>rejected</i>.

Promises have state, they start as pending and can settle to:

- <b>fulfilled</b> the computation completed successfully.
- <b>rejected</b> the computation failed.

Here is an example of how to construct a Promise

    new Promise(function (resolve, reject) {
      // Do some Async stuff
      // call resolve if it succeeded
      // reject if it failed
    });

An example of implementing an object with a fetch method that returns a promise.

	// some mock news data
	let news = [ 
      {
        'id': 1,
        'title': 'article 1',
        'description': 'this is a description'
      },
      {
        'id': 2,
        'title': 'article 2',
        'description': 'this is a description'
      }
    ]  
        
    let NewsRequest = {    
      fetch: function (type) {
        /* the promise */
        return new Promise(function (resolve, reject) {
          if (type === "news") { // resolve
            resolve(news);
          } else { // reject
            reject({ status: 'error, could not fetch news results' });
          }
        });
      },
      otherMethod: function () {
        /* just any other method on this object */
        console.log('not implemented')
      }
    };

    module.exports = NewsRequest

Calling this promise to display the news results



    NewsRequest.fetch('news')
    	.then((newsData) => {
          // our promise resolved with the data
          console.log(newsData)
        })