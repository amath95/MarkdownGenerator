import inquirer from 'inquirer';
import { appendFile } from 'fs';



const questions = [
    
{   name: "project_title",
    type:"input",
    message: 'Enter a project title:',
    validate: (answer)=>{
        if(answer ==="") {return "Enter a title"} return true; 
    }
},
{   name: "project_description",
    type:"input",
    message: 'Describe the project:',
    validate: (answer)=>{
        if(answer ==="") {return "Enter a proper description"} return true; 
    }
    

},
{   name: "usage",
    type:"input",
    message: 'How to use the project?:',
    validate: (answer)=>{
        if(answer ==="") {return "Enter a proper description"} return true; 
    }
    

},
{   name: "links",
    type:"input",
    message: 'Links that were used for the projects:',


},
{   name: "built_with",
    type:"input",
    message: 'NPM packages used to build the project:',

},
{   name: "contributions",
    type:"input",
    message: 'Contributions:',


},
{   name: "author",
    type:"input",
    message: 'Enter an author:',
    validate: (answer)=>{
        if(answer ==="") {return "Enter a title"} return true; 
    }

},
];

inquirer.prompt(questions)
.then( answers =>{


    const content = 
    "# "+answers.project_title+"\n" +
    "# Projection Description \n"+answers.project_description+" \n" +

    "[Usage](#usage)\n\n" +
    "[Links](#links)\n\n"+
    "[Built With](#built-with)\n\n"+
    "[Contributions](#xontribtutions)\n\n"+
    "[Authors](#authors)\n\n"+

    "## Usage \n"+answers.usage+" \n" 
    "## Links \n"+answers.links+" \n" +
    "## Built With \n"+answers.built_with +" \n" +
    "## Contributions\n"+answers.contributions+" \n" +
    "## Authors \n"+ answers.author;

   appendFile('README.md', content,  (err)=>{
        if(err) throw err;
        console.log('Content Added');

   } );


})

