require('dotenv').config()
const express = require('express')

const app = express()

const port = 4000

const githubData ={
  "login": "debasmitabagchi",
  "id": 144320102,
  "node_id": "U_kgDOCJomZg",
  "avatar_url": "https://avatars.githubusercontent.com/u/144320102?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/debasmitabagchi",
  "html_url": "https://github.com/debasmitabagchi",
  "followers_url": "https://api.github.com/users/debasmitabagchi/followers",
  "following_url": "https://api.github.com/users/debasmitabagchi/following{/other_user}",
  "gists_url": "https://api.github.com/users/debasmitabagchi/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/debasmitabagchi/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/debasmitabagchi/subscriptions",
  "organizations_url": "https://api.github.com/users/debasmitabagchi/orgs",
  "repos_url": "https://api.github.com/users/debasmitabagchi/repos",
  "events_url": "https://api.github.com/users/debasmitabagchi/events{/privacy}",
  "received_events_url": "https://api.github.com/users/debasmitabagchi/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "debasmitabagchi",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": "\r\nAIML || MLOPs || VLMs || ANN || AGI || RAGs || CNW || VLSI || Linux || TempleOS || AWS GenAI || AWS Cloud || Google Cloud || ",
  "twitter_username": null,
  "public_repos": 14,
  "public_gists": 0,
  "followers": 1,
  "following": 3,
  "created_at": "2023-09-07T07:23:34Z",
  "updated_at": "2026-04-08T02:29:27Z"
}

app.get('/githubData',(req,res) => {
    res.json(githubData)
})

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter',(req,res) => {
    res.send('debasmitadotcom')
})

app.get('/login',(req,res) => {
    res.send('<h1>Please login at chai aur code</h1>')
})

app.get('/youtube',(req,res) => {
    res.send('<h2>chai aur code</h2>')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
