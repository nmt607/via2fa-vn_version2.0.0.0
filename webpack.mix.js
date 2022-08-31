const mix = require('laravel-mix');


// backend
// mix.js('resources/js/backend/pages/admin/*.js', 'public/js/backend/index.js')
//     .sass('resources/sass/backend/main.scss', 'public/css/backend')
// .version()

// frontend
mix.sass('resources/scss/frontend/main.scss', 'public/css/frontend')
// .version()

// backend
mix.sass('resources/scss/backend/main.scss', 'public/css/backend')
