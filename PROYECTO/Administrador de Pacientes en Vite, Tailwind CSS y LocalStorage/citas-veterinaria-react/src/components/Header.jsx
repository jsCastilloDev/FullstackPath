import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (
      <>
        <h1 className="font-black text-5xl text-cente md:w-2/3 mx-auto">
            Seguimiento Pacientes 
            <span className="text-indigo-700" > Veterinaria</span>
        </h1>
      </>
    )
  }
}



