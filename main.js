const express = require('express')
const app = express()
const Crawler = require('crawler')

app.set('views', __dirname + '/src')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/public', express.static('public'))

app.get('/', async (req, res, next) => {
  let c = new Crawler()
  c.direct({
    uri: 'https://web-api.juejin.im/query',
    method: 'post',
    headers: {
      'X-Agent': 'Juejin/Web',
      'Content-Type': 'application/json'
    },
    json: true,
    body: {
      extensions: {
        query: {
          id: '653b587c5c7c8a00ddf67fc66f989d42'
        }
      },
      variables: {
        order: 'POPULAR',
        first: 100
      }
    },

    jQuery: false,
    skipEventRequest: false, // default to true, direct requests won't trigger Event:'request'

    callback: function(error, response) {
      if (error) {
        console.log(error)
      } else {
        const num = req.query.num || 10
        const responseData = response.body.data.articleFeed.items.edges || []
        let title = 'crawler'
        let news = []
        news = responseData.filter(item => {
          return item.node.likeCount > 50
        })
        news.splice(num)
        res.render('index', { news, title })
      }
    }
  })
})

app.listen(3000)
