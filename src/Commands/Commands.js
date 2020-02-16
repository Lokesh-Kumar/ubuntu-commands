const data = {

	"hosting": [
		{
			"title": "",
			"steps": [
				{
					"cmd": "",
					"desc": "",
				}
			]
		}
	],



    "Hosting":[
        {
            "title":"Hosting in Python Server", 
            "content":"<-python3 -m http.server 7777->"
        }

    ],
    "Process":[
        {
            "title":"To get the list of all running process", 
            "content":"<-ps aux | grep -i apt->"
        },
        {
            "title":"To get the process id using port number", 
            "content":"<-fuser <port-number>/tcp->"
        },
        {
            "title":"To kill that particular process in that port number", 
            "content":"<-user -k 8080/tcp->"
        },
        {
            "title":"To kill a specific process with process id", 
            "content":"<-sudo kill -9 <process id->"
        }
    ],
    "Install":[
        {
            "title":"VSCode", 
            "content":"First, update the packages index and install the dependencies by typing<-sudo apt update-><-sudo apt install software-properties-common apt-transport-https wget-> Next, import the Microsoft GPG key using the following wget command <-wget -q https://packages.microsoft.com/keys/microsoft.asc -O- | sudo apt-key add - -> And enable the Visual Studio Code repository by typing <- sudo add-apt-repository 'deb [arch=amd64] https://packages.microsoft.com/repos/vscode stable main' -> Once the apt repository is enabled, install the latest version of Visual Studio Code with <-sudo apt update-> <-sudo apt install code->"
        },
        {
            "title":"Postman",
            "content":"Download from the link:  https://www.getpostman.com/downloads/  Follow the commands and change to the current version  <-sudo tar -xzf Postman-linux-x64-6.2.4.tar.gz -> <-rm Postman-linux-x64-6.2.4.tar.gz -> <-sudo mv Postman /opt/Postman-> <-sudo ln -s /opt/Postman/Postman /usr/bin/postman-> <-postman->"
        },
        {
            "title":"React",
            "content":"<-sudo apt-get install nodejs npm-> To create a react application <- create-react-app project-name -> " 
        }
    ],
    "Firebase":[
        {
            "title":"Hosting",
            "content":"Step 1 - Install Firebase Tools <-npm install -g firebase-tools-> Step -2 Login <-firebase login-> Step 3 - Initialize the Firebase App <-firebase init-> Step 4 - Deploy Firebase App <-firebase deploy->"
        }
        
    ],
    "NPM":[
        {
            "title":"Install NPM",
            "content":"<- sudo apt-get install npm ->"
        },
        {
            "title":"To enlist available module", 
            "content":"Sample Description <- npm list -g ->"
        },
        {
            "title":"To check the current version of npm",
            "content":"<- npm -v ->"
        },
        {
            "title":"To check the current version of handlebars",
            "content":"<- handebars --version ->"
        },
        {
            "title":"To install a package in NPM",
            "content":"<- npn i package_name ->"
        },
        {
            "title":"To run NPM GUi",
            "content":"<-npm install -g npm-gui-> <-cd c:\your-project-folder -> <- npm-gui localhost:9000 ->"
        }
    ]
    

}
export default data;
