import React from 'react'

export default function actoresCreate() {
  return (
    <div
      className="modal fade"
      id="createDataModal"
      data-backdrop="static"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="createDataModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="createDataModalLabel">
              Crear Actor
            </h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true close-btn">x</span>
            </button>
          </div>
          <div className="modal-body">
            <form>
              <div className="form-group">
                <label htmlFor="nombre" />
                <input
                  wire:model="nombre"
                  type="text"
                  className="form-control"
                  id="nombre"
                  placeholder="Nombre"
                />
                @error('nombre'){' '}
                <span className="error text-danger">
                  {'{'}
                  {'{'} $message {'}'}
                  {'}'}
                </span>{' '}
                @enderror
              </div>
              <div className="form-group">
                <label htmlFor="sex_id" />
                {/* <input wire:model="sex_id" type="text" class="form-control" id="sex_id" placeholder="Sex Id">@error('sex_id') <span class="error text-danger">{{ $message }}</span> @enderror */}
                <select wire:model="sex_id" className="form-control" name id="sex_id">
                  <option value={0}>-Seleccione-</option>
                  {/* @foreach ($sexos as $id=&gt;$nombre) */}
                  {/* 
                                    <option value="{{$id}}">{'{'}{'{'} $nombre {'}'}{'}'}</option>
                                    @endforeach */}
                </select>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary close-btn" data-dismiss="modal">
              Cerrar
            </button>
            <button type="button" className="btn btn-primary close-modal">
              Guardar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
