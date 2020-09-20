 const express= require('express');
 const {textLower,textUpper}= require('./text.js');
 const {numberMin, numberMax} = require('./number.js');
 const app = express();
 app.use(express.json());
 app.post('/util/text/lowercase', (req,res)=>{
     const {input}= req.body;
     const result = {
         action: "lowercase",
         input,
         output: textLower(input),
     };
     res.json(result);
 });

 app.post('/util/text/uppercase', (req,res)=>{
    const {input}= req.body;
    const result = {
        action: "uppercase",
        input,
        output: textUpper(input),
    };
    res.json(result);
});


app.get('/util/number/minium', (req, res)=>{
    const input = Number(req.query.input);
    const result = {
        action: "minium",
        input,
        output: numberMin(input[0], input[1], input[2]),
    };
    res.json(result)
});
app.get('/util/number/minimum', (req, res)=>{
    const input = req.query.input.split(",");
    const result = {
        action: "minimum",
        input,
        output: numberMin(Number(input[0]), Number(input[1]), Number(input[2])),
    };
    res.json(result)
});
app.get('/util/number/maximum', (req, res)=>{
    const input = req.query.input.split(",");
    const result = {
        action: "maximum",
        input,
        output: numberMax(Number(input[0]), Number(input[1]), Number(input[2])),
    };
    res.json(result)
});

 app.listen(3000);
