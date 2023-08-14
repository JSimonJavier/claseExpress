const { log } = require("console")
const express = require("express")
const router = express.Router()

router.get("/", (req, res)=>{
  res.status(200).send("hola")
})

router.get("/despedida", (req, res)=>{
  res.status(200).send("chau chau")
})

router.get("/usuario", (req, res)=>{
  res.status(200).send({nombre: "Javier", apellido: "Simon", edad: 32})
})

//!-----> REQ BODY
router.post("/libro", (req,res)=>{
  console.log("BODY", req.body); //{ titulo: 'Harry Potter', autor: 'JK Rowling' }
  res.status(201).send(`Tu libro es: ${req.body.titulo} de ${req.body.autor}`)
})

router.post("/bart", (req, res)=>{

  const {nombre,apellido,email,direccion,telefonos} = req.body
 

  res.status(200).send(`Mi nombres es ${nombre} ${apellido}, mi mail es ${email}, mi direccion es ${direccion.calle} ${direccion.ciudad} ${direccion.pais} y mis telefonos son ${telefonos[0]} ${telefonos[1]}`)
})

//!-----> REQ PARAMS
const propiedades = [
  {
    id: 1,
    calle: "Calle falsa 123",
    tipo: "ph",
    habitaciones: 3
  },
  {
    id: 2,
    calle: "Falsa calle 321",
    tipo: "casa",
    habitaciones: 1
  },
  {
    id: 3,
    calle: "La calle 213",
    tipo: "casa",
    habitaciones: 4
  }
]

router.get("/propiedades", (req, res)=>{
  res.status(200).send(propiedades)
})

router.get("/propiedades/:id", (req, res)=>{
  
  const id = Number(req.params.id)

  const propiedad = propiedades.find(p => p.id === id)

  if(propiedad){
    res.status(200).send(propiedad)
  } else{
    res.status(404).send({message: "La propiedad no esta disponible"})
  }

})


router.get("/tipoPropiedad/:tipo", (req,res)=>{
  const {tipo} = req.params
  const respuesta = propiedades.filter(p => p.tipo === tipo)

  if(respuesta){
    res.status(200).send(respuesta)
  }

})



module.exports = router

