# About The Project


This is a server code developed by Node, for a panel, with login and register routes.
It also has a big data collector whitch collects data from some valnerable websites or servers. It also uses cheerio for some collecting purposes, This means it may break at some point in the future, depending on the sites behavior.

It collects data about:
* Dollar, Gold, Digital currency, Oil and Coin Prices 
* Also data about car prices

Benefits:
* It's live, depending on the client usage, whenever you send a request to an end point, obviosly it will send The specified data back to you
* It uses JWT for authenticating your requests, so it's not vulnerable for malicious users
* You can have multiple source of data at the same time, instead of opening a webiste for each:)


Weaknesses:
* Sometimes it works a bit slow, depending the requested operation, It may take about 3 seconds to respond





<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* Node.js
* Mongodb


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
### For getting started you need to set some things up
There are two ways for you to connect to mongodb database One is by connecting localy to you PC, 
or Connecting to mongodb cloud database.
if you want to use mongodb cloud database, you need to set two more global variables:
* NAME => your cloud database name
* PASSWORD => your cloud data base password 
You may need to change the config path too.

Global variables: There are some variables that you need to set:
* PORT
* NODE_ENV => for setting the environment it can be dev or prod depending on you reeds
* DEBUG => for debugging the application i can be app:debug or app:prod depending on you needs
 


### Installation


1. Clone the repo
   ```sh
   git clone https://github.com/josephosan/panel-server.git
   ```
2. Install NPM packages
   ```sh
   npm i
   ```
3. run the app
   ```sh
   node index.js
   ```

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## The live usage is avalable on
<a href="https://josephosan.info/api/panel-server/" target="_blank">Panel-server</a>
