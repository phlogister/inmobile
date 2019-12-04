// export const Usuarios = new Mongo.Collection('usuarios');
export const Clientes = new Mongo.Collection('clientes');
export const Taraturas = new Mongo.Collection('taraturas');

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

//Publicidad <- eliminar

//Mensajes <- eliminar (slack/email)

//Global <- Encargos que solo pueden ver Franquiciados y Gerentes (editar dueño(usuario q lo crea)??)

//Control Oficina
//- crear/eliminar/editar usuario

//MAPA

//PERFILES USUARIO
//-Comercial (LW:Agenda, Taratura)                      }
//-Asesor (L: Agenda, W: Taratura, Noticias, Encargos)  } Crear
//-Gerente (Todo)                                       } No ¿pwd? (borrar?)
//-Franquiciado (Todo y Edición)                        }
//-Coordinadora (Agenda, Pedidos) (Publicidad: Web Elena, Mensajes: Slack)

//Usuario (id,email,pass)
// \-> Oficina, Perfil, NombreAp, Tlfnos {}, Direccion?, DNI?

//Oficina (id) -> a mano
// \-> Nombre/Direccion, CP, Codigo?

//RELACIONES DE MUCHOS {}
