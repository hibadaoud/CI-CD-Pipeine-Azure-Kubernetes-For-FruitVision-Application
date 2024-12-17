# CI/CD Pipeline on Gitlab for FruitVision application: AI-Powered Fruit Counting & Classification deployed with Azure Kubernetes

## CONSIDERATION:

-The original application was stored in gitlab. It was only moved to this github repository for reach and visibility reasons. Therefore, it is highly recommended that you clone it from the original repository if you wish to try this project!

-GITLAB REPOSITORY: [CLICK THIS LINK](https://gitlab.com/supspace/supspace-collaboration-platform)


## 📖 **Table of Contents**

- [📌 Project Overview](#-project-overview)
- [🔑 Key Objectives](#-key-objectives)  
- [⚙️ Technologies Used](#️-technologies-used)  
- [🏛️ Architecture](#️-architecture)  
- [📝 Stages Breakdown](#-stages-breakdown)  
- [🔧 Setup and Usage](#-setup-and-usage)  
- [🔮 Future Considerations](#-future-considerations)  

---
## 📌 **Project Overview**

This repository extends the [FruitVision-AI-Powered-Fruit-Counting-Classification-with-Docker-Containerization-and-Terraform](https://github.com/hibadaoud/FruitVision-AI-Powered-Fruit-Counting-Classification-with-Docker-Containerization-and-Terraform) project, automating and optimizing the **development** and **deployment** processes as mentionned in the future considerations. It creates a **Gitlab CI/CD pipeline** with **development**, **staging** and **production** **environments** and **tests**.

This pipeline enhances the original project by automating complex workflows, improving reliability, and reducing deployment time.  


## 🔑 **Key Objectives**

- 🛡️ **Security and Vulnerability Scanning**: Ensure code, secrets, and container images are secure by identifying and mitigating vulnerabilities during the CI/CD pipeline.  
- ✅ **Automated Testing**: Automatically test all changes to ensure functionality and stability.  
- 🐳 **Dockerization**: Build, test, and package services into portable Docker images.  
- ☸️ **Kubernetes Deployment**: Deploy services seamlessly across multiple environments (**Dev**, **Staging**, and **Production**) using Kubernetes clusters. 
- 🔄 **Integration Testing**: Validate the functionality and reliability of all services after deployment.  
- 🔗 **Post-Deployment Automation**: Ensure automated deployment of the application by updating the deployment URL dynamically in the Flutter app to ensure seamless deployment.
 

## 🏛️ Architecture

The CI/CD pipeline follows a **stage-by-stage process** to automate development and deployment. Below is the visual workflow:

Commit -> Test Code -> Build Docker Image -> Test Docker -> Push Image -> Deploy to Kubernetes -> Integration Tests -> Post-Deploy Config Updates

- The CI/CD pipeline is organized into six key stages, with a focus on **automation** and **validation**:  

1. **Test**: Runs unit tests for the Node.js backend.  
2. **Containerization**: Builds, tests, and pushes Docker images for backend and model services.  
3. **Environment Deployment**: Deploys services to **Dev**, **Staging**, and **Production** environments using Kubernetes manifests.  
4. **Integration Testing**: Validates deployed services by testing API endpoints.  
5. **Post-Deployment Updates**: Updates Firebase Remote Config dynamically with the new deployment URLs.  

## ⚙️ **Technologies Used**

| **Component**         | **Technology**                     |
|------------------------|------------------------------------|
| **CI/CD**             | GitLab CI/CD                       |
| **Testing**           | Jest (Node.js Backend)             |
| **Containerization**  | Docker, Docker Compose             |
| **Orchestration**     | Kubernetes                         |
| **Cloud Deployment**  | Azure Kubernetes Service (AKS)     |
| **Automation**        | Firebase Remote Config API         |


