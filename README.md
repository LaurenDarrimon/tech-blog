# The Rubber Duck - Tech Blog
## Lauren Darrimon
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&logo=appveyor)](https://opensource.org/licenses/MIT) ![Language Badges](https://img.shields.io/github/languages/top/laurenDarrimon/tech-blog?style=for-the-badge&logo=appveyor) ![Commits Badge](https://img.shields.io/github/last-commit/laurenDarrimon/tech-blog?style=for-the-badge&logo=appveyor) ![Repo Size](https://img.shields.io/github/repo-size/laurenDarrimon/tech-blog?style=for-the-badge&logo=appveyor) ![Repo Issues](https://img.shields.io/github/issues/laurenDarrimon/tech-blog?style=for-the-badge&logo=appveyor)
    
### Description
Full-stack CMS-style blog where developers can login to publish, update, and comment on articles, using MVC architectural structure, Handlebars.js, Sequelize, and Express-Session.

### Table of Contents

* [Link](#link)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Questions](#questions)
* [License](#license)


### Link 
🔗 
Link to application [The Rubber Duck - Tech Blog](https://vast-chamber-35721.herokuapp.com/)

![tech blog demo gif](public/images/tech-blog.gif)


### Installation
🔧
In order for this application to work, you need to install the following (dependencies): 
bcrypt, connect-session-sequelize, dotenv, express, express-handlebars, express-session, handlebars, mysql2, sequelize. 

After you clone down the repository, install dependencies from the root directory. 

~~~
npm install 
~~~

Then, move into the db/ directory and create the database in MySQL. 
~~~
mysql -u root -p
source schema.sql
~~~

Next, move back into the root directory and seed your database with the sample data. 
~~~
npm run seed
~~~


### Usage 
To enable the server from the command line: 

~~~
npm start
~~~

### Contributing 
✍️ 
Lauren Darrimon is the author of this application. Find additional work on Lauren Darrimon's [Github profile.](http://github.com/laurenDarrimon).


### Questions
❓💌
Reach out to Lauren Darrimon at hello@laurenlalita.com if you have any questions. 

### License
The license for this project is: [MIT](https://opensource.org/licenses/MIT)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge&logo=appveyor)](https://opensource.org/licenses/MIT)
