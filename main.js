import express from 'express'
import {Issuer} from 'openid-client'
import {createRemoteJWKSet, jwtVerify} from 'jose'
import {formations} from "./data/formations.data.js";

const app = express()
const port = 3000

app.get('/formations', async (req, res) => {
  const authorization = req.headers['authorization']
  const accessToken = authorization?.replace(/bearer /gi, '')
  const issuer = await Issuer.discover("https://dev-tzeom-9o.us.auth0.com")
  const jwksUrl = new URL(issuer.metadata.jwks_uri)
  const jwks = createRemoteJWKSet(jwksUrl)

  try {
    const {payload} = await jwtVerify(accessToken, jwks)
    console.log(payload)

  } catch (e) {
    console.log(e)
    return res.status(401).send({code: 401, error: 'FORBIDDEN'})
  }
  const result = formations().map((formation) => ({id: formation.id}))
  res.send(result)
})

app.get('/formations/:id', (req, res) => {
  const id = req.params.id;
  const result = formations().find((formation) => formation.id === id)
  if (result) {
    res.send(result)
  } else {
    res.status(404).send({code: 404, error: 'NOT_FOUND'})
  }
})

app.listen(port, () => {
  console.log(`Formations api listening on port ${port}`)
})
