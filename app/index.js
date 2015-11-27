var express        = require('express')
  , passport       = require('passport')
  , GitHubStrategy = require('passport-github').GitHubStrategy

var app = express()

passport.serializeUser(function (user, done) {
  done(null, user)
})

passport.deserializeUser(function (obj, done) {
  done(null, obj)
})

passport.use(new GitHubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.GITHUB_CALLBACK
  },
  function (accessToken, refreshToken, profile, done) {
    // on succesesful auth
  }
))

// app.use(express.logger())
// app.use(express.cookieParser())
// app.use(express.bodyParser())
// app.use(express.methodOverride())
// app.use(express.session({ secret: 'cookie monster' }))
// app.use(passport.initialize())
// app.use(passport.session())
// app.use(app.router)

app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(process.env.PORT || 5000)
