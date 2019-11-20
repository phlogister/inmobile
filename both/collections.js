export const Usuarios = new Mongo.Collection('usuarios');
export const Clientes = new Mongo.Collection('clientes');
export const Pisos = new Mongo.Collection('pisos');

//Clientes: Nombre, Apellidos, teléfono(/s), DNI/wtever, comprador=t|f, vendedor=t|f, ¿¿global=t|f??, ..., notas
// \-> Añadir, Editar, Eliminar
// \-> J: Nombre y Apellidos, DocIdentidad, Telefono, Direccion, Pisos_Visitados, comentarios_pisos (ref cruzada), 
//     Presupuesto_max, Aportación inicial, Financiacion, Global, Búsqueda auto (uf)

//Pisos (Taratura): Dirección, Ref.Catastral, global=t|f, dueño(cliente), valor, n_habs, m2, ..., notas
// \-> Añadir, Editar, Eliminar
// \-> J: Direccion, Propietario/s, nºfinca/Registro, m2, n_habs, baños, cocina, parking, ascensor, altura (ej: 7mo de 8: [7/8]), año, tipo,
//        comentarios_clientes (ref cruzada), notas, Global
//Encargo: Contrato sobre propiedad (Cliente y Piso)
//Pedido: Busca propiedad (Cliente)


//Noticias
//\-> Cliente/s

//Publicidad

//Mensajes

//Global

//Control Oficina
//- crear/eliminar/editar usuario

//MAPA

//PERFILES USUARIO
//-Comercial (LW:Agenda, Taratura)
//-Asesor (L: Agenda, W: Taratura, Noticias, Encargos)
//-Coordinadora
//-Gerente/Franquiciado

//Usuario (id,email,pass)
//Oficina, Perfil, NombreAp, Tlfnos {}, Direccion?, DNI?

//OFICINA?? -> a mano
// \-> Nombre/Direccion, Codigo?

//RELACIONES DE MUCHOS {}
