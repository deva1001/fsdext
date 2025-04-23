async function getWeather(){

    let city=document.getElementById('city').value;
    
const response= await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6a86468ac81fa36a5565acaaa9f651b5`)
const data = await response.json()

const {list}=data
var temparray=new Array()
for(let i=0;i<list.length;i=i+8){
    const {dt_txt,main:{temp,temp_min,temp_max}}=list[i]

    
    temparray.push(temp);
   console.log(`Date:${dt_txt},Temperature:${temp},Minimum_temp:${temp_min},Max_temp:${temp_max}`)




}
}
getWeather()
