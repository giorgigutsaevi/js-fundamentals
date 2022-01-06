/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import got from 'got';

// const handleReceivedResponse = (response) => {
//   let res = JSON.parse(response.body);
//   console.log(res);
// }

// got('https://api.github.com/repos/sinatra/sinatra').then(handleReceivedResponse);

// Another way of writing the above ///

// got('https://api.github.com/repos/sinatra/sinatra').then((response) => {
//   console.log(JSON.parse(response.body));
// });

const fetchRepoInfo = (repoName, callback) => {
  got(`https://api.github.com/repos/${repoName}`).then((response) => {
    callback(JSON.parse(response.body))
  });
}

fetchRepoInfo('sinatra/sinatra', (dataReceived) => {
  console.log(dataReceived);
});