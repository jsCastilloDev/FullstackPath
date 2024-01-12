racf
import React, { Component } from 'react'

export default class Paciente extends Component {
  render() {
    return (
        <div className="m-3 shadow-md px-5 py-10 bg-white">
        <p className="font-bold mb-3 text-gray-700 uppercase">nombre.ombre: {" "}
          <span className="font-normal normal-case">
            Hook
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Propietario: {" "}
          <span className="font-normal normal-case">
            juan
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Email: {" "}
          <span className="font-normal normal-case">
            correo@correo
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Dia de Alta: {" "}
          <span className="font-normal normal-case">
            10 diciembre
          </span>
        </p>
        <p className="font-bold mb-3 text-gray-700 uppercase">Sintomas: {" "}
          <span className="font-normal normal-case">
            duerme mucjo
          </span>
        </p>
      </div>
          
    )
  }
}
