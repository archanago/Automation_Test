# Automation_Test
Weather API Automation Test

## Pre-Requisites & Project Setup:
A. Node.js (npm)
B. Cypress 
C. Code Editor

Once everything is setup, the following should be the folder structure:
![image](https://user-images.githubusercontent.com/10388724/120902482-51691a00-c65e-11eb-9610-fc22f1457401.png)

Structure within Cypress folder:
![image](https://user-images.githubusercontent.com/10388724/120902669-36e37080-c65f-11eb-930f-5d6ec880ea79.png)

The base URL of our API is provided in cypress.json file:
![image](https://user-images.githubusercontent.com/10388724/120902026-a7888e00-c65b-11eb-865f-d6ef574eea9c.png)

Our API test resides within the _sample.spec.js_ file in the _Services_ folder inisde _Integration_ folder within Cypress folder created during step B (Cypress installation)
![image](https://user-images.githubusercontent.com/10388724/120902781-e3255700-c65f-11eb-83e5-8d3ae7c2c752.png)
This is to test the Happy path of firing GET request to the provided weather API: http://api.weatherstack.com

![image](https://user-images.githubusercontent.com/10388724/120903301-10273900-c663-11eb-8286-e01bf9f60f1e.png)

## Steps to Run the API Test
1. Open command prompt
2. Navigate to project folder
3. Run cypress as below:
`npx cypress open`
![image](https://user-images.githubusercontent.com/10388724/120902975-f2f16b00-c660-11eb-8352-862bef98bada.png)


Running the above command opens Cypress 
Select our folder within the Integration folder (`Integration/Services/`)
![image](https://user-images.githubusercontent.com/10388724/120903052-7a3ede80-c661-11eb-9d4f-276ce0f12079.png)

We can find our test run in the new browser window launched and the output of our API test can be seen as below:
![image](https://user-images.githubusercontent.com/10388724/120903079-b1ad8b00-c661-11eb-96d3-fb0b8f0f00d1.png)

The output displays the status of the tests whether Pass/Fail, which in this case is green (Pass)!
