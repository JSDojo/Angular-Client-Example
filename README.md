# AngularRESTClient | Itexico AMC's Examples

A simple example client made in angular, to consume from a RESTful API from an externartal location.

## The goal

The main cause of building this is to provide a reference for me and the team when... 

- building Angular Aplications, 
- interacting with web services and RESTful APIs
- using dependency/package management with NPM and Bower
- using automation with Grunt (probably will make a GULP build later on)

## Getting Started

First we want to make sure our environment is all setup, for this we will need to install the next stuff...

**NodeJS** | Install node from [ this link right here](http://nodejs.org/), just follow the steps, wither in windows or 
                                                                   unix based OSs, check if you installed it correctly by running thenext comamand on your cli

    node --version

and

    npm --version
    
npm is going to be our package manager for all backend related stuff

**Bower**  | After installing NodeJS, you should have an instance of NPM installed as well, try this by running the next command:

    npm install -g bower
    
this will install Bower globally, wich is going to be our package manager for all frontend related stuff.

Ok, now we are ( *almost* ) ready to start ...
    
# ContactsAPI

This projects serves but two purposes: test $http requests against a backend RESTful API... and be able to add, delete and update users record



### 1. The simple setup
The following config files were created 
	
- package.json (for backend dependencies management and project configuration) 
- bower.json(for front end dependencies management)
- .bowerrc(used to configure bower)

Also, these other files were created

- server.js Where we are going to instantiate our node server
- README.md: this readme file

#### 1.1 Managing backend dependencies with NPM

The dependencies I declared in our package.json file are as follow: 

	{
        "name":"ContactsAPI",
        "description":"A backend API with a frontend purposely for adding, updating and deleting users records",
        "dependencies":{
            "express":"latest",        
            "mongoose":"latest",
            "body-parser":"latest",
            "morgan":"latest"
        }    
	}

**express**: A multi tiered backend devcandy, used to set up our RESTful API

**mongoose**:  ORM for mongo db, we are going to use it for our CRUD operations on the data layer

**body-parser**: this express extension will let us catch the request's body

**morgan**: our express logger, to find out where we things mainly for debugging

#### 1.2 Managing frontend dependencies with bower

The dependencies declared for our frontend look as follows:

	{
        "name":"ContactsAPI",
        "description":"A backend API with a frontend purposely for adding, updating and deleting users records,
        "dependencies":{        
            "angular":"latest"
        }    
    }


The directory specified below tells bower where we want our dependencies delivered:

	{
        "directory":"public/vendor"
    }
    
This overrides the default directory (./bower_components) and tells bower to install stuff on "./public/vendor"

### 1.3 Installing all that stuff

Now lets run some commandline... commands

	npm install -g bower
    
And then  

	npm install
    
and finally

    bower install
    
This should leave our directory tree looking somewhat like this: 

	ContactsApi(master)
    |--node_modules
    |  |--{backendDependencies}
    |--public
    |  |--vendor
    |     |--{fronendDependencies}
    |--.bowerrc
    |--bower.json
    |--package.json
    |--README.md
    |--server.js
    

### 2. The  design

The following are the list of what we are trying to achieve :

- See all our contacts in an orderly fashion
- Add some new contacts
- Delete a contact we no longer want to honor with it's row on our list
- Update some info on a contact

So our api should be something like this

**GET /api/contacts** 					: Get a json with all our contacs from our database

**POST /api/contacts**					: Insert a new contact in the database

**GET /api/contacts/:contact_id**		: Get a specific contact by id

**DELETE /api/contacts/:contact_id**	: Delete a contact from the database by id

**PUT /api/contacts/:contact_id**		: Update a specific contact by id











   
