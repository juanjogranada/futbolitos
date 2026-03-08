exports.handler = async function(event) {

const API_KEY="6384ae06-da08-4f15-948e-2517570d89b0";

const {dateFrom,dateTo,status}=event.queryStringParameters;

const url='https://api.football-data.org/v4/competitions/PD/matches?season=2025&dateFrom=${dateFrom}&dateTo=${dateTo}&status=${status}';

console.log("La url: " + url);
  
const response=await fetch(url,{
headers:{
"X-Auth-Token":API_KEY
}
});

const data=await response.json();

return{
statusCode:200,
body:JSON.stringify(data)
};

};
