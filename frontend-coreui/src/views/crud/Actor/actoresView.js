/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable prettier/prettier */
import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function actoresView() {
  const URL = 'http://localhost:8080/actores'

//   const [actorSeleccionado, setActorSeleccionado] = useState({
//     nombre: '',
//     sex_id: 0,
//   })

  const [data, setData] = useState([])

  const listarGet = async () => {
    await axios.get(URL).then((response) => {
      setData(response.data)
    })
  }

  useEffect(() => {
    listarGet()
  })

  return (
    <div>
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="card">
              <div className="card-header">
                <div
                  style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  <div className="float-left">
                    <h4>Lista de Actores </h4>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="form-control"
                      name="search"
                      id="search"
                      placeholder="Buscar Actores"
                    />
                  </div>
                  <div
                    className="btn btn-sm btn-info"
                    data-toggle="modal"
                    data-target="#createDataModal"
                  >
                    <i className="fa fa-plus" /> Crear Actor
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-bordered table-sm">
                    <thead className="thead">
                      <tr>
                        <td>Id</td>
                        <th>Nombre</th>
                        <th>Sexo</th>
                        <td>Acciones</td>
                      </tr>
                    </thead>
                    <tbody>
                      {data.map((actor) => (
                        <tr key={actor.id}>
                          <td>{actor.id}</td>
                          <td>{actor.nombre}</td>
                          <td>{actor.sex_id}</td>
                          <td>
                            <div className="btn-group">
                              <button
                                type="button"
                                className="btn btn-info btn-sm dropdown-toggle"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                              >
                                Acciones
                              </button>
                              <div className="dropdown-menu dropdown-menu-right">
                                <a
                                  href="#"
                                  data-toggle="modal"
                                  data-target="#updateModal"
                                  className="dropdown-item"
                                >
                                  <i className="fa fa-edit" /> Editar
                                </a>
                                <a
                                  className="dropdown-item"
                                >
                                  <i className="fa fa-trash" /> Eliminar
                                </a>
                              </div>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
