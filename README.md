# Setup project on your local
### note : this commands are for the linux debian based systems the commands may be different for the windows system
make sure you've correct node version (node 14) for the project install node version 14


### to fire up mongo for backend on linux/wsl 
sudo mongod --fork -f /etc/mongod.conf

## to check the node version
`node -v`
if you don't have node version 14 then make sure you install node 14 using docs from `https://nodejs.org/dist/v14.17.3/node-v14.17.3-x64.msi`(windows), `https://nodejs.org/dist/v14.17.3/node-v14.17.3-linux-x64.tar.xz`(linux)

## to switch the node version
`nvm use 14`

## setup Frontend
### to run the server 
`npm run dev`


## setup backend
### setup the mongoDB 
install mongoDB on the machine depending on the operating system using docs `https://www.mongodb.com/docs/manual/installation/`
### note : make sure you are running node 14 on the machine
### steps to run backend
step 1 : run mongoDb on the system po

step 2 : run `npm run dev` to start the server on port 5000
