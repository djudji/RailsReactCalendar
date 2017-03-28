# Appointment Management App

A simple Calendar App with managing appointments functionality.

Technologies used:

* Rails 5
* React
* Bootstrap 4
* Haml

Regarding React gems:

App is made with [react-rails] gem at first, and then, I've made transition to [react_on_rails] gem.

1. Clone app
2. Run `bundle && yarn`
3. Start the app with: `foreman start -f Procfile.dev`

For deployment be sure to follow [heroku guide for installing binaries] and adding multiple buildpacks.

In terminal add nodejs buildpack at first position:

`heroku buildpacks:add --index 1 heroku/nodejs`

[react-rails]: https://github.com/reactjs/react-rails
[react_on_rails]: https://github.com/shakacode/react_on_rails
[heroku guide for installing binaries]: https://devcenter.heroku.com/articles/ruby-support#installed-binaries