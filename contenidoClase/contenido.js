/*
? EXPRESS
  -Es un framework que perimite creacion de servidores y manejo de rutas, solicitudes y respuestas http.
  -Es facil de usar para node.js -> desarrolladores creen aplicacion web de forma rapida y sencilla
  -Construir nuestra API(aplication programminf interfaces)

  *instalancion express
   - git init (cree mi repositorio en el cual voy a ver el status, add y commit - PUSH GITHUB)
   - npm init -y (crear el package.json)
   - npm i express  (se en depencias express y me aparece la carpeto node_modules) 
  

? API REST (Representational State Transfer)
  -> las API toman el pedido del cliente y los lleva al servidor, a su vez le respondera con los recurson que seran llevados hasta la computadora donde se encuentra
  -> para poder trabajar con estos recursos -> metodos http -> GET - POST - PUT - DELETE

  *RUTAS
   -> URL que un cliente solicita a traves del protocolo http

?levantando un servidor
  * puerto - IP
    - cada dispositivo tiene su IP unica que lo identifica en la RED
    - forma de organizar la comunicacion entre servicios y dispositivos

  *Creamos nuestro primer servidor

  *primeras rutas
    metodos -> get post put delete
    status codes -> 200OK 201Create 404not found 500Interval Server Error
    http://localhost:3000/usuarios/Juan

  *ejemplos con peticion GET
    -> se ejecuta una funcion get
    -> vamos a acceder a la URL
    -> se ejecuta una funcion donde va a esta la request y la response

? express router
  - organiza de mejor manera el manejo de solicitudes http

? req body - req params
  *postman - thunder client
    -> navegador solo para metodos get

  !request => REQ -> se utiliza para accede a informacion adicional enviada por el cliente
    *req.body
    *req.params


*/