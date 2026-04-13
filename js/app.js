const data = [

{
categoria:"⚡ Electricidad",
servicios:[
{
id:"electricidad1",
titulo:"Instalaciones domiciliarias",
img:"img/gato-electricidad.png",
descripcion:"Instalación completa en hogares",
incluye:["Cableado","Tomacorrientes","Iluminación"],
para:"Hogares",
tiempo:"1-2 días"
},
{
id:"electricidad2",
titulo:"Instalaciones comerciales",
img:"img/gato-electricidad.png",
descripcion:"Instalación en negocios",
incluye:["Cableado","Seguridad","Soporte"],
para:"Empresas",
tiempo:"2-3 días"
},
{
id:"electricidad3",
titulo:"Cortocircuitos",
img:"img/gato-electricidad.png",
descripcion:"Reparación de fallas",
incluye:["Diagnóstico","Cambio de cables","Pruebas"],
para:"Todos",
tiempo:"Horas"
},
{
id:"electricidad4",
titulo:"Iluminación LED",
img:"img/gato-electricidad.png",
descripcion:"Instalación de luces",
incluye:["Decorativas","Seguridad","Ahorro"],
para:"Hogares",
tiempo:"1 día"
},
{
id:"electricidad5",
titulo:"Tableros y breakers",
img:"img/gato-electricidad.png",
descripcion:"Protección eléctrica",
incluye:["Tablero","Breakers","Seguridad"],
para:"Todos",
tiempo:"1 día"
},
{
id:"electricidad6",
titulo:"Puesta a tierra",
img:"img/gato-electricidad.png",
descripcion:"Sistema de protección",
incluye:["Varillas","Instalación","Seguridad"],
para:"Casas",
tiempo:"1 día"
}
]
},

{
categoria:"📹 Seguridad",
servicios:[
{
id:"cam1",
titulo:"Instalación de cámaras",
img:"img/gato-camara.png",
descripcion:"Sistema completo CCTV",
incluye:["Interior","Exterior","Cableado"],
para:"Casas y negocios",
tiempo:"1 día"
},
{
id:"cam2",
titulo:"Monitoreo celular",
img:"img/gato-camara.png",
descripcion:"Acceso remoto",
incluye:["Apps","Configuración","Acceso"],
para:"Usuarios",
tiempo:"Horas"
},
{
id:"cam3",
titulo:"Mantenimiento cámaras",
img:"img/gato-camara.png",
descripcion:"Optimización",
incluye:["Limpieza","Enfoque","Reparación"],
para:"Empresas",
tiempo:"Horas"
}
]
},

{
categoria:"🔧 Herramientas",
servicios:[
{
id:"her1",
titulo:"Taladros",
img:"img/gato-taladro.png",
descripcion:"Reparación",
incluye:["Carbones","Motor","Limpieza"],
para:"Usuarios",
tiempo:"Horas"
},
{
id:"her2",
titulo:"Amoladoras",
img:"img/gato-taladro.png",
descripcion:"Reparación",
incluye:["Rodamientos","Motor","Balanceo"],
para:"Usuarios",
tiempo:"Horas"
},
{
id:"her3",
titulo:"Sierras",
img:"img/gato-taladro.png",
descripcion:"Mantenimiento",
incluye:["Afilado","Motor","Seguridad"],
para:"Usuarios",
tiempo:"Horas"
},
{
id:"her4",
titulo:"Mantenimiento general",
img:"img/gato-taladro.png",
descripcion:"Diagnóstico",
incluye:["Lubricación","Ajustes","Revisión"],
para:"Todos",
tiempo:"Horas"
}
]
},

{
categoria:"🏠 Electrodomésticos",
servicios:[
{
id:"ele1",
titulo:"Licuadoras",
img:"img/gato-electrodomesticos.png",
descripcion:"Reparación",
incluye:["Motor","Cuchillas","Limpieza"],
para:"Hogar",
tiempo:"Horas"
},
{
id:"ele2",
titulo:"Ventiladores",
img:"img/gato-electrodomesticos.png",
descripcion:"Reparación",
incluye:["Motor","Lubricación","Cambio piezas"],
para:"Hogar",
tiempo:"Horas"
},
{
id:"ele3",
titulo:"Refrigeradores",
img:"img/gato-electrodomesticos.png",
descripcion:"Mantenimiento",
incluye:["Diagnóstico","Reparación","Revisión"],
para:"Hogar",
tiempo:"Horas"
}
]
},

{
categoria:"💻 Informática",
servicios:[
{
id:"pc1",
titulo:"Formateo PC",
img:"img/gato-pc.png",
descripcion:"Optimización total",
incluye:["Sistema","Drivers","Programas"],
para:"Usuarios",
tiempo:"2-4 horas"
},
{
id:"pc2",
titulo:"Optimización",
img:"img/gato-pc.png",
descripcion:"Limpieza sistema",
incluye:["Virus","Optimización","Mantenimiento"],
para:"Usuarios",
tiempo:"Horas"
},
{
id:"pc3",
titulo:"Impresoras",
img:"img/gato-pc.png",
descripcion:"Soporte",
incluye:["Instalación","Errores","Config"],
para:"Usuarios",
tiempo:"Horas"
}
]
},

{
categoria:"🌐 Redes",
servicios:[
{
id:"red1",
titulo:"Redes domésticas",
img:"img/gato-redes.png",
descripcion:"WiFi y conexión",
incluye:["Configuración","Problemas","Señal"],
para:"Casas",
tiempo:"Horas"
},
{
id:"red2",
titulo:"Redes negocio",
img:"img/gato-redes.png",
descripcion:"Instalación red",
incluye:["Cableado","Config","Estabilidad"],
para:"Empresas",
tiempo:"1 día"
}
]
},

{
categoria:"🤖 Robótica",
servicios:[
{
id:"rob1",
titulo:"Arduino",
img:"img/gato-robot.png",
descripcion:"Proyectos",
incluye:["Programación","Sensores","Proyectos"],
para:"Estudiantes",
tiempo:"Variable"
},
{
id:"rob2",
titulo:"Automatización",
img:"img/gato-robot.png",
descripcion:"Sistemas automáticos",
incluye:["Luces","Sensores","Control"],
para:"Casas",
tiempo:"Variable"
}
]
},

{
categoria:"📚 Clases",
servicios:[
{
id:"cla1",
titulo:"Matemáticas",
img:"img/gato-clases.png",
descripcion:"Apoyo escolar",
incluye:["Ejercicios","Explicación","Tareas"],
para:"Estudiantes",
tiempo:"Horas"
},
{
id:"cla2",
titulo:"Programación",
img:"img/gato-clases.png",
descripcion:"Clases",
incluye:["Python","C#","Proyectos"],
para:"Estudiantes",
tiempo:"Horas"
},
{
id:"cla3",
titulo:"Electrónica",
img:"img/gato-clases.png",
descripcion:"Clases",
incluye:["Circuitos","Práctica","Teoría"],
para:"Estudiantes",
tiempo:"Horas"
},
{
id:"cla4",
titulo:"Robótica",
img:"img/gato-clases.png",
descripcion:"Proyectos",
incluye:["Arduino","Sensores","Robots"],
para:"Estudiantes",
tiempo:"Horas"
}
]
},

{
categoria:"🧩 Especiales",
servicios:[
{
id:"esp1",
titulo:"Diagnóstico técnico",
img:"img/gato-general.png",
descripcion:"Evaluación",
incluye:["Análisis","Solución","Presupuesto"],
para:"Todos",
tiempo:"Horas"
},
{
id:"esp2",
titulo:"Emergencias",
img:"img/gato-general.png",
descripcion:"Atención rápida",
incluye:["Urgencias","Fines semana","Soporte"],
para:"Todos",
tiempo:"Inmediato"
}
]
}

];

// RENDERIZAR TODO 🔥
const contenedor = document.getElementById("contenedor");

data.forEach(cat => {

let html = `<h3 class="section-title">${cat.categoria}</h3><div class="row g-4">`;

cat.servicios.forEach(s => {

html += `
<div class="col-md-4">
<div class="card-pro">
<img src="${s.img}">
<div class="p-3">
<h5>${s.titulo}</h5>
<p>${s.descripcion}</p>

<button class="btn btn-primary w-100"
onclick="abrirModal('${s.id}')"
data-bs-toggle="modal"
data-bs-target="#modalServicio">
Ver rápido
</button>

<a href="detalle.html?id=${s.id}" class="btn btn-outline-dark w-100 mt-2">
Ver completo
</a>

</div>
</div>
</div>
`;

});

html += `</div>`;
contenedor.innerHTML += html;

});
let servicioActual = null;

function abrirModal(id){

// LIMPIAR VARIABLE
servicioActual = null;

// BUSCAR SERVICIO
data.forEach(cat=>{
cat.servicios.forEach(s=>{
if(s.id === id){
servicioActual = s;
}
});
});

// VALIDACIÓN (IMPORTANTE)
if(!servicioActual){
console.log("No se encontró el servicio");
return;
}

// LLENAR DATOS
document.getElementById("modalTitulo").innerText = servicioActual.titulo || "";
document.getElementById("modalDesc").innerText = servicioActual.descripcion || "";
document.getElementById("modalTiempo").innerText = servicioActual.tiempo || "";
document.getElementById("modalImg").src = servicioActual.img || "";

// LISTA
let lista = "";
(servicioActual.incluye || []).forEach(i=>{
lista += "<li>✔ " + i + "</li>";
});

document.getElementById("modalIncluye").innerHTML = lista;

}

function contactarModal(){
let mensaje = "Hola quiero el servicio de " + servicioActual.titulo;
window.open("https://wa.me/59179559806?text=" + mensaje);
}