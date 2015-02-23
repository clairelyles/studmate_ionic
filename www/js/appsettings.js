AppSettings = {
  // @if ENV == 'DEVELOPMENT'
  baseApiUrl: 'http://localhost:1337/',
  // @endif
  // @if ENV == 'PRODUCTION'
  baseApiUrl: 'https://studmateapp.herokuapp.com/'
  // @endif
}