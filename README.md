# Note App
This is a simple Web application using React as FrontEnd and Django(A python Based Database Framework) as a backend.
So here We are using
- DjangoRest Framework (For Serializers,data conversion to JSON Format so that it can be used in FrontEnd).
- Django-cors-headers (it allows in-browser requests to your Django application from other origins).
- Websockets from Django Channels library.
- React-Websockets (for FrontEnd) . 
- Redis (to Cache the data).

<p align="left">
  <img  src="https://user-images.githubusercontent.com/19578447/66978345-3c292b80-f0c7-11e9-933b-497446d99d4b.jpg">
</p>

### Functionality this App Includes are
- Adding of the Notes
- Realtime Editing of Notes

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
Make Sure you Have the following things Installed on your Machines.

- Python
- Node.js
- pip
- Django
- React

## Running the App
### Open the Terminal and make sure you are in Right Directory `/note_project/` containing `manage.py` file and run below commands.
- install ` djangorestframework ` .
  > pip install djangorestframework
  
- install ` django-cors-headers `
  > pip install django-cors-headers
  
- install ` websockets  ` from Django Channels Library .
  > pip install -U channels
  
- Now Run the server
  > python manage.py runserver
  
### Now Change the Directory to `/note_project/frontend/ ` and run below commands

- install `React-Websockets`
  >npm install --save react-websocket
  
- now run the server
  > npm start
  
Now you are able to See the Similar Result as shown Above...but when you try to Edit it gives Websockets Error.... 

its because we have not started our Redis Server

head over to this [link](https://github.com/microsoftarchive/redis/releases) and download the Latest release .

Now Unzip the file and Run `redis-server` file 

And you are good to go.

or to run via command line add the path of the directory to Environment Variable PATH and In terminal  run `redis-server`
and you are good to go.

Enjoy!
  
## Realtime Editing side by side
<p align="left">
  <img  src="https://user-images.githubusercontent.com/19578447/66978341-34698700-f0c7-11e9-8c69-e0b28a70ccea.gif">
</p>





