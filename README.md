# Front-end part for recipes site

set git remote to heroku:
heroku git:remote -a recipessaitynaisite

push dist folder to Heroku:
git subtree push --prefix dist heroku master