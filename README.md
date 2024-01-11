I asked Bing Chat to generate a beginner-friendly project using Docker and node.js.  This repository is the result of me following Bing Chat's instructions and fixing any issues I encountered along the way.

Issues:
1. I could tell the version of node.js specified by Bing was not current.  I chose not to use the generated Dockerfile and generated one myself using [this method](https://docs.docker.com/language/nodejs/containerize/) which runs `docker init`.
2. Running `docker compose up --build` produced this error: `failed to solve: node:20.11.0-alpine: docker.io/library/node:20.11.0-alpine: not found`.  The Dockerfile that was generated required node-alpine which is a smaller version of node.  I modified the `FROM` statement in the Dockerfile to use the regular version of node.  However, that didn't work either.  I then ran `docker pull node`, then tried to build again and the app was built successfully.
3. Initially, I could not push my docker image to the docker hub.  This was due to a combination of:
  - Not tagging the image correctly
  - Not creating a repository for my image on hub.docker.com
  - Not logging in to docker hub from my terminal
[This](https://docs.docker.com/get-started/04_sharing_app/) link solved a lot of my issues
4. nginx was not required to get the app running since express used it's own web server.

Summary:
This was my first docker project where I was exposed to every stage of the SDLC up to Deployment.  It took about a day from idea to deployment.  Please feel free to audit my code and provide feedback.

