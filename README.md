### **FAVS - API**

CRUD para usuarios y sus favoritos, servicios protegidos con JWT (JSON Web Token).

### **API**

* POST /auth/register crear usuario
* POST /auth/login loguear usuario
* POST /api/favs crear lista de favoritos del usuario
* GET /api/favs/:id obtener una lista de favoritos especifica del usuario
* GET /api/favs obtener todas las listas de favoritos del usuario
* DELETE /api/favs/:id borrar una lista de favoritos

### **ESTRUCTURA .ENV**

* REACT_APP_SERVER_PORT=3001
* REACT_APP_MONGO_URL=mongodb://0.0.0.0:27017
* REACT_APP_JWT_KEY=makeitreal

### **EJEMPLO REQUEST - CREAR LISTA DE FAVORITOS**

~~~
HEADERS: { "authorization": TOKEN}
BODY: {
    "name": "Peliculas",
    "favs": [
        {"title": "Princesa Mononoke", "description": "Manga", "link": "https://www.youtube.com/watch?v=NixsPRMfqV0"},
        {"title": "El planeta del tesoro", "description": "Disney", "link": "https://www.youtube.com/watch?v=X9kgVAWF9lo"}
        ]
}
~~~
