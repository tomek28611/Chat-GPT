
const { Configuration, OpenAIApi } = require("openai");
const express = require('express')
const configuration = new Configuration({
    organization: "org-OgTS1f3GaeHoxlk7t8EaPay6",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);

const bodyParser = require('body-parser')
const cors = require('cors')

// const response = await openai.listEngines();
// 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



// express api


const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const port = 3080

app.post('/', async (req, res) => {
    const { message } = req.body;
    console.log(message)
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${message}`,
        max_tokens: 100,
        temperature: 0.5,
      });

      res.json({
        message: response.data.choices[0].text,
      })
});

app.listen(port, () => {
    console.log(`Listening on ${port} `);
});