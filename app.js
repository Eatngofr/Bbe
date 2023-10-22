const express = require('express')
const dotenv = require('dotenv')
const openai = require('openai')
const config = require('./config')

dotenv.config()

const app = express()

app.post('/chat', async (req, res) => {
  const message = req.body.message

  const response = await openai.completions.create({
    engine: 'davinci-codex',
    prompt: message,
    max_tokens: config.maxTokens,
  })

  res.send(response.choices[0].text)
})

app.listen(process.env.PORT || 3000)
