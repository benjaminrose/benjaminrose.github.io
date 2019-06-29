# Benjamin's Website

## Develoment Instalation

Get jekyll installed [docs](https://jekyllrb.com/docs/installation/macos/)

```bash
# requires user/GUI interaction
xcode-select --install

# Install Homebrew
which brew

brew install ruby
echo 'export PATH=/usr/local/opt/ruby/bin:$PATH' >> ~/.bash_profile
gem install --user-install bundler jekyll

# pay attention to the ruby version 
echo 'export PATH=$HOME/.gem/ruby/2.6.0/bin:$PATH' >> ~/.bash_profile
```

You can check that ruby and your gems can all by found by using `gem env`. 

Finally install this website's dependancies:
```bash
gem install jekyll-paginate jekyll-redirect-from```
Find all current dependancies listed in `_config.yml`.


## Hidden pages

* non-advertised pages
	* /around/
	* /src/
	* /thanks/
	* /travel/
* redirects
	* /amazon/
	* /lets-meet/
	* /setapp/
	* /twitter/
	* /wyzant/