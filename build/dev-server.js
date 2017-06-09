require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var proxyMiddleware = require('http-proxy-middleware')
var webpackConfig = process.env.NODE_ENV === 'testing'
  ? require('./webpack.prod.conf')
  : require('./webpack.dev.conf')

// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware
var proxyTable = config.dev.proxyTable

var app = express()
/*模拟数据开始*/


// 本地json-server服务器搭建代码
// 引入数据库文件
var appData = require('../mock.json')


var apiRoutes = express.Router()
// 使用api的方法来创建连接时候的请求
apiRoutes.post('/getEquipmentList', function (req, res) {
  res.json(appData.getEquipmentList);
});
apiRoutes.post('/getEquipmentInfo', function (req, res) {
  res.json(appData.getEquipmentInfo);
});
apiRoutes.post('/getShareEList', function (req, res) {
  res.json(appData.getShareEList);
});
apiRoutes.post('/getUnitUser', function (req, res) {
  res.json(appData.getUnitUser);
});
apiRoutes.post('/getUsedConfirmList', function (req, res) {
  res.json(appData.getUsedConfirmList);
});
apiRoutes.post('/getUsedConfirm', function (req, res) {
  res.json(appData.getUsedConfirm);
});
apiRoutes.post('/bookingCheck', function (req, res) {
  res.json(appData.bookingCheck);
});
apiRoutes.post('/getBookingList', function (req, res) {
  res.json(appData.getBookingList);
});
apiRoutes.post('/getBookingInfo', function (req, res) {
  res.json(appData.getBookingInfo);
});
apiRoutes.post('/cancelBooking', function (req, res) {
  res.json(appData.cancelBooking);
});
apiRoutes.post('/getUserEquipmentList', function (req, res) {
  res.json(appData.getUserEquipmentList);
});
apiRoutes.post('/cancelApply', function (req, res) {
  res.json(appData.cancelApply);
});
apiRoutes.post('/getUserInfo', function (req, res) {
  res.json(appData.getUserInfo);
});
apiRoutes.post('/unitLogin', function (req, res) {
  res.json(appData.unitLogin);
});
apiRoutes.post('/apply', function (req, res) {
  res.json(appData.apply);
});
apiRoutes.post('/getBookingTimes', function (req, res) {
  res.json(appData.getBookingTimes);
});
apiRoutes.post('/booking', function (req, res) {
  res.json(appData.booking);
});
apiRoutes.post('/unitSignOut', function (req, res) {
  res.json(appData.unitSignOut);
});

// 调用api
app.use('/api', apiRoutes)




/*模拟数据结束*/
var compiler = webpack(webpackConfig)

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// proxy api requests
Object.keys(proxyTable).forEach(function (context) {
  var options = proxyTable[context]
  if (typeof options === 'string') {
    options = { target: options }
  }
  app.use(proxyMiddleware(options.filter || context, options))
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

// serve pure static assets
var staticPath = path.posix.join(config.dev.assetsPublicPath, config.dev.assetsSubDirectory)
app.use(staticPath, express.static('./static'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

console.log('> Starting dev server...')
devMiddleware.waitUntilValid(() => {
  console.log('> Listening at ' + uri + '\n')
  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
  _resolve()
})

var server = app.listen(port)

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
