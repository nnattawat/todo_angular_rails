# todo_angular_rails
Build simple todo app using Angular and Rails. I use Bootstarp for the frontend framework.

## Running project

Create your `database.yml` from the sample setup

    cp database.yml.sample database.yml

Setting up the database

    rake db:create:all
    rake db:schema:load

Installing gems and all required assets

    bundle
    rake bower:install

Start server and good to go!!

    rails s