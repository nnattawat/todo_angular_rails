FROM ruby:2.2.3
RUN apt-get update -qq && apt-get install -y build-essential libmysqlclient-dev apt-utils nodejs npm
RUN mkdir /todo_angular_rails
WORKDIR /todo_angular_rails
ADD Gemfile /todo_angular_rails/Gemfile
ADD Gemfile.lock /todo_angular_rails/Gemfile.lock
RUN bundle install
ADD . /todo_angular_rails
