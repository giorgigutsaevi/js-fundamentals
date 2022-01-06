/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import got from 'got';

const handleReceivedResponse = (response) => {
  let res = JSON.parse(response.body);
  console.log(res);
}

got('https://api.github.com/repos/sinatra/sinatra').then(handleReceivedResponse);

