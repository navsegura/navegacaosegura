# **NaveGuard - Back End**
[![Readme in Portuguese](https://img.shields.io/badge/README-Portuguese-blue)](./README_PT.md)

## ⚙ **Features**
The NaveGuard API is divided into four main sections, each responsible for a specific area of the application. All APIs follow the **CRUD** (Create, Read, Update, Delete) standard, ensuring complete data management.

### **1. User API**
Manages user profiles, including registration, updates, deletion, and information retrieval.

#### **Main Features**:
- Register new users.
- Retrieve user information by ID.
- List all registered users.
- Update personal data.
- Delete accounts.

| Method | Route                | Description                     |
|--------|----------------------|---------------------------------|
| POST   | `/api/user`          | Register a new user             |
| GET    | `/api/user/{id}`     | Retrieve user by ID             |
| GET    | `/api/user`          | List all users                  |
| PUT    | `/api/user/{id}`     | Update user information         |
| DELETE | `/api/user/{id}`     | Delete user                     |


### **2. Tutorials API**
Provides educational resources and guides on safety, aiding in awareness and prevention.

#### **Main Features**:
- Add new tutorials (admin).
- List all available tutorials.
- Retrieve a tutorial by ID.
- Update tutorial information.
- Delete tutorials.

| Method | Route                  | Description                     |
|--------|------------------------|---------------------------------|
| POST   | `/api/tutorial`        | Register a new tutorial         |
| GET    | `/api/tutorial`        | List all tutorials              |
| GET    | `/api/tutorial/{id}`   | Retrieve a tutorial by ID       |
| PUT    | `/api/tutorial/{id}`   | Update a tutorial by ID         |
| DELETE | `/api/tutorial/{id}`   | Delete a tutorial by ID         |


## 🚫 **Deployment**
Currently, the application has not been deployed. To run the project locally, you need to download and execute **both the front-end and back-end repositories**.

### ▶ **How to Run the Project (Front-End and Back-End)**
To clone and run this project, follow these steps:

1. **Clone the repositories (front-end and back-end)**:
   - Front-end:
     ```bash
     git clone https://github.com/navsegura/navegacaosegura
     ```
   - Back-end:
     ```bash
     git clone https://github.com/navsegura/navegacaosegura-backend
     ```

2. **Install the dependencies**:
   - Navigate to the project folders and install the dependencies for both the front-end and back-end:
     ```bash
     cd front-end/naveguardFront/src
     npm install
     ```
     ```bash
     cd back-end/naveguard
     npm install
     ```

3. **Run the front-end**:
   - After installing the dependencies, use the command below to run the front-end:
     ```bash
     npm run dev
     ```

4. **Run the back-end**:
   - In another terminal tab, navigate to the back-end folder and start the server:
     ```bash
     npm run dev
     ```
     
## 🧪 **Testing**
You can test the application in two ways:
- **Manually**: Use tools like [Postman](https://www.postman.com/downloads/) or [Insomnia](https://insomnia.rest/download) to test the routes listed above.
- **Automated**: Once the deployment is complete.

Below are examples of test scenarios:

<div align="center"> 
  <h3>List all tutorials (GET)</h3>
  <img src="" width="600px">
 
  <h3>Retrieve tutorial by ID (GET)</h3>
  <img src="" width="600px">

  <h3>Update tutorial by ID (PUT)</h3>
  <img src="" width="600px">
  
  <h3>Create tutorial (POST)</h3>
  <img src="" width="600px">
</div>


## 📅 **Conclusion**
"NaveGuard" combines entertainment and education with a strong focus on interactive games. This gamified approach, combined with features involving both parents and children, creates a unique experience that is hard for competitors to replicate. The platform not only educates but also entertains, ensuring greater adherence to the content.

A significant improvement for future development would be implementing a real database to store information, replacing the current mocked data. This would allow for greater scalability, security, and flexibility in data management, as well as a more robust experience for platform users.

## 💻 **Founders**

| ![Heverton Vitor][img1] | ![Jamyle Elen][img2] | ![Antônio de Pádua][img3] | ![Guilherme Davino][img4] | ![Jonas Rafael][img5] | ![Rodrigo Silva][img6] | ![Theofilo Henrique][img7] | ![Leandra Mayla][img8] |
|:-----------------------:|:--------------------:|:-------------------------:|:-------------------------:|:---------------------:|:----------------------:|:--------------------------:|:----------------------:|
| **Heverton Victor**      | **Jamyle Elen**      | **Antônio de Pádua**      | **Guilherme Davino**      | **Jonas Rafael**      | **Rodrigo Silva**      | **Theofilo Henrique**      | **Leandra Mayla**     |
| **PO**                   | **Scrum Master**     | **Role**                  | **Role**                  | **Role**              | **Role**               | **Role**                   | **Social Media**      |

[img1]: https://github.com/user-attachments/assets/4f7785c6-6bf1-4df3-bffe-952bd125e7b0
[img2]: https://github.com/user-attachments/assets/4b3637cc-e1a0-45e4-af1b-6b37f3626ecb
[img3]: https://github.com/user-attachments/assets/2cc51c8b-fe97-4f55-ae3a-dd8e95a36ede
[img4]: https://github.com/user-attachments/assets/dc908943-6114-453d-a2dc-ea90c06c19c4
[img5]: https://github.com/user-attachments/assets/9958bd7d-a61e-4d84-81e2-049fb0620892
[img6]: https://github.com/user-attachments/assets/712e6e18-99ae-4387-94fd-32cec5564e3f
[img7]: https://github.com/user-attachments/assets/0e1acee6-6b75-43dc-b61e-21a25d03b42b
[img8]: https://github.com/user-attachments/assets/d9bfc7f5-8b31-4930-b308-b0596cb58f19
