## Running your app:
### On your machine
In the project directory, you can run:
#### `npm start` or `yarn start`
Runs the app in the development mode in your pc.<br>

### Moving to docker
After that, run the following command to generate a docker image to contenerize your project:
#### `docker build -t sample:dev .`
Now, you have your docker image based on your _Dockerfile_, you can run your app running the next command:
#### `docker run -v ${PWD}:/app -v /app/node_modules -p 4050:3000 --rm sample:dev`
Now... your app is running on your localhost, but, now on the port 4050 instead the 3000 port.