const http = require('http');

const apiKey = 'your-api-key-goes-here';
const league = 'nfl'; // This could also be nba, mlb, etc.
const date = '20190210'; // The date should be in yyyyMMdd format

const options = {
  hostname: 'site.api.espn.com',
  path: `/apis/site/v2/sports/football/${league}/scoreboard?dates=${date}&limit=1000&apikey=${apiKey}`,
  method: 'GET'
};

const req = http.request(options, (res) => {
  console.log(`Status Code: ${res.statusCode}`);
  
  res.on('data', (d) => {
    const parsedData = JSON.parse(d);
    console.log(parsedData); // Log the response to the console
  });
});

req.on('error', (error) => {
  console.error(error);
});

req.end();