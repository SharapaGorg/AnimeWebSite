const express = require('express');
const kitsu = require('kitsu');

const api = new kitsu();
let app = new express();
app.use(express.json())

app.get('/popular/', async (req, res) => {
    const result = await api.get('anime', {
      params: {
        sort :'-averageRating',
        page: {
          limit : 20
        }
      }
    });
    res.send(result.data);
})

app.get('/movies/', async (req, res) =>{
  const result = await api.get('anime', {
    params: {
      page: {
        limit : 10
      }
    }
  })
  res.send(result);
})

app.get('/oldMovies/', async (req, res) => {
  const result = await api.get('anime', {
    params: {
      sort :'createdAt',
      page: {
        limit : 20
      }
    }
  });
  res.send(result.data);
})

app.get('/lastEpisodes/', async (req, res) => {
  let result = []
  const episodes = await api.get('episodes', {
    params: {
      sort: '-airdate',
      page: {
        limit : 20
      }
    }
  })

  for (let episode of episodes.data) {
    if (Date.parse(episode['airdate'] )< Date.now()) {
        result.push(episode)
    }
  }

  res.send(result);
})

module.exports = {
  path: "/api/",
  handler: app
};
