## Running your app:
### On your machine
In the project directory, you can run:
#### `npm start` or `yarn start`
Runs the app in the development mode in your pc.<br>

### Moving to docker
After that, run the following command to generate a docker image to contenerize your project:
#### `build -t react-docker-app .`
Now, you have your docker image based on your _Dockerfile_, you can run your app running the next command:
#### `docker run -it -p 8080:80 react-docker-app`
Now... your app is running on your localhost, but, now on the port 8080 instead the 3000 port.


### Moving to Kubernetes
And now, you can deploy your container to a kubernetes cluster.
For this example we are using a local kubernetes cluster (single node).
If you want to know how this magic things happens you can read our _kubernetes-deploy.yml_ file.
Our first step is create a new namespace, so, we need to run:
#### `kubectl create ns ibmcd`
And now, it's time to go live, you need to generate a kubernetes deployment, and you can do that with this command:
#### `kubectl apply -f ./kubernetes-deploy.yml`
So, if you want to know anything about your kubernetes pods you can run this command:
#### `kubectl get pods --namespace ibmcd`
Now, to get access to our pod, we need to create a kubernetes service, to do that, run this command:
#### `kubectl port-forward <YOUR APP POD NAME> 8080:80 --namespace ibmcd`