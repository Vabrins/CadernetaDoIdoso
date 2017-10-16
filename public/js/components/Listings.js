import React from 'react';

class Listings extends React.Component {
  constructor (props) {
    super(props)    
    this.state = {}
  }

  render () {
    return (
      <div>
            <div className="card mb-3">
            <div className="card-header">
              <i className="fa fa-table"></i> Hístorico de Atualizações</div>
            <div className="card-body">
              <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                  <thead>
                    <tr>
                      <th>Modificado</th>
                      <th>Profissional</th>
                      <th>Unidade de Saúde</th>
                      <th>Data</th>
                      <th>Ação</th>
                    </tr>
                  </thead>
                  <tfoot>
                    <tr>
                      <th>Modificado</th>
                      <th>Profissional</th>
                      <th>Unidade de Saúde</th>
                      <th>Data</th>
                      <th>Ação</th>
                    </tr>
                  </tfoot>
                  <tbody>
                    <tr>
                      <td>Dados Pessoais</td>
                      <td>Tiger Nixon</td>
                      <td>Edinburgh</td>
                      <td>25/04/2011</td>
                      <td><a href="#">Visualizar</a></td>
                    </tr>
                    <tr>
                      <td>Controle de glicemia</td>
                      <td>Donna Snider</td>
                      <td>New York</td>
                      <td>25/01/2011</td>
                      <td><a href="#">Visualizar</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div className="card-footer small text-muted">Atualizado ontem às 11:59</div>
          </div>
      </div>
    )
  }
}

  export default Listings;