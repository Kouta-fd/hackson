
// const user_scores 
// const *developers avarage scores 
let fullstack_score
let backend_score

let url = 'https://api.sheety.co/f09c39af78f0495cbe279de19fc43594/無題のスプレッドシート/data';

fetch(url)
.then((response) => response.json())
.then(json => {
  // Do something with the data
  backend_score = json.data[0]['scores']
  frontend_score = json.data[1]['scores']
  fullstack_score = json.data[2]['scores']


  console.log(backend_score);
  console.log(frontend_score)

  console.log(fullstack_score)
  
})



//上の処理が遅いから処理が終了する前にscoreが定義される？
//console.log(fullstack_score)


// set data
const data = {
  labels: [
    'Basic CS knowledge',
    'Backend developing',
    'Database',
    'infrastructure',
    'Frontend developing',
    'Security',
    // 'Management',
    // 'Bussiness'
  ],
  datasets: [{
    label: 'Your skill score as a frontend developer',
    data: [75, 19, 80, 51, 76, 75, ],// get your skills scores from user input
    fill: true,
    backgroundColor: 'rgba(0, 181, 204, 0.2)',
    borderColor: 'rgba(0, 181, 204, 1)',
    pointBackgroundColor: 'rgba(0, 181, 204, 1)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'gba(0, 181, 204, 1)'
   }, 
   {
    label: 'Avarage skill score for backend developers',
    data: [58, 78, 70, 59, 36, 67, ],// get * developer skills scores from database
    fill: true,
    backgroundColor: 'rgba(123, 239, 178, 0.2)',
    borderColor: 'rgba(123, 239, 178, 1)',
    pointBackgroundColor: 'rgba(123, 239, 178, 0.2)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(123, 239, 178, 1)'
   },
   {
    label: 'Avarage skill score for fullstack developers',
    data: [70, 68, 60, 56, 72, 64 ],// get your skills scores from user input
    fill: true,
    backgroundColor: 'rgba(247, 202, 24, 0.2)',
    borderColor: 'rgba(247, 202, 24, 1)',
    pointBackgroundColor: 'rgba(247, 202, 24, 0.2)',
    pointBorderColor: '#fff',
    pointHoverBackgroundColor: '#fff',
    pointHoverBorderColor: 'rgba(247, 202, 24, 1)'
   }, 
]
};

const config = {
  type: 'radar',
  data: data,
  options: {
    elements: {
      line: {
        borderWidth: 3
      }
    }
  },
};

const myChart = new Chart(
  document.getElementById('myRadarChart'),
  config
)