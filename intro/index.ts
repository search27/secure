import axios from 'axios';


const test = async () => {
    const url = 'http://13.124.149.13:8000/';
    const tempRes = await axios.get(url).catch((err) => {return console.log(err)});
    console.log(tempRes);
    console.log(tempRes['data']);
}

test();

// var axios = require('axios');



// var url = 'http://13.124.149.13:8000/';

// axios.get(url).then(function(res, err){
//     console.log(res);
// }).catch(function(err){
//     console.log(err);
// });