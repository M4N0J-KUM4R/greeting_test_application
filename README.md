CI/CD Pipeline Project
This project demonstrates a CI/CD pipeline using Jenkins to deploy a Node.js web application to AWS EC2 using Docker.
Setup

Clone this repository
Install dependencies: npm install
Run tests: npm test
Start the application: npm start

CI/CD Pipeline
This project uses Jenkins for continuous integration and deployment. The pipeline:

Checks out the code from the repository
Installs dependencies
Runs unit tests
Builds a Docker image
Pushes the Docker image to Amazon ECR
Deploys the image to an EC2 instance

AWS Setup
Ensure you have the following AWS resources set up:

An EC2 instance for running the application
An ECR repository for storing Docker images
Appropriate IAM roles and policies

Jenkins Setup
Configure Jenkins with the necessary plugins and credentials for AWS and your source control system
