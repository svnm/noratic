####Install Docker on an EC2 on AWS

launch an EC2 linux Ubuntu instance
Connect to it via ssh [guide here](http://ghost.stevenisekimart.in/set-up-a-node-js-site-on-ec2-with-nginx-pm2/)

```
sudo apt-get update
sudo apt-get -y install docker.io
```

Link and fix paths

```
sudo ln -sf /usr/bin/docker.io /usr/local/bin/docker
sudo sed -i '$acomplete -F _docker docker' /etc/bash_completion.d/docker.io
```

####Configure Docker to start when the server boots:

```
sudo update-rc.d docker.io defaults
```

Add ubuntu user to the docker group so you can execute Docker commands without using sudo.

```
sudo usermod -a -G docker ubuntu
```

**I found at this stage I had to do a reboot to restart the docker daemon!**
```
sudo reboot
```

then once your instance has rebooted ssh back in

```
ssh my_ec2_instance
```

####Download/pull an ubuntu Image

```
docker pull ubuntu
```

This finds the ubuntu image by name on Docker Hub and downloads it to a local image cache.

run a Docker Container

```
docker run -i -t ubuntu /bin/bash
```

Congratulations you just ran a docker container running ubuntu :)

now exit from it

```
exit
```

####Working with your container

To list our containers:

```
docker ps # Lists running containers
docker ps -a # Lists all containers
```

Check your docker version

```
docker -v
```

start and stop a docker container

```
docker stop <container_id>
```

first list the running containers
```
docker ps
```
you should see your one ubuntu container running

```
CONTAINER ID        IMAGE         
6a12eeecb232        ubuntu:latest 
```

stop the container using your <container_id> above

```
docker stop <container_id>
```

We can see the container is no longer running

```
docker ps
```

now start the container

```
docker start <container_id>
```

we should see it is running again

```
docker ps
```