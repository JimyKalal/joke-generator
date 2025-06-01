//joke_generator.js

import https from 'https';
import chalk from 'chalk';

const getJoke = () =>{
const url ="https://official-joke-api.appspot.com/random_joke";

https.get(url,(res)=>{
    let data ="";
res.on('data',(chunk)=>{
data += chunk.toString();
})
res.on('end',()=>{
const joke = JSON.parse(data);
console.log((`Here's a random ${joke.type} joke:`));
console.log(chalk.red(`${(joke.setup)}`));
console.log(chalk.blue.bgRed.bold(`${(joke.punchline)}`));



})
res.on('error',(err)=>{
    console.log(`Error: ${err.message}`);
    
})
})
}
getJoke();
//miniPRoject\joke_generator.js
