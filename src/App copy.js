import React, { Component } from 'react';
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guests: [],
      newfirst: '',
      newlast: '',
      error: '',
    }
  }
  addUser = (event) => {
    event.preventDefault();
    if (this.state.newfirst === '' || this.state.newlast === '') {
      this.setState({ error: 'error' })
    } else {
      let oldTasks = this.state.guests
      let newTask = { first: this.state.newfirst, last: this.state.newlast };
      this.setState({
        guests: [...oldTasks, newTask],
        newfirst: '',
        newlast: '',
      })
    }
  }
  updateFirst = (event) => {
    this.setState({
      newfirst: event.target.value,
    })
  }
  updateLast = (event) => {
    this.setState({
      newlast: event.target.value,
    })
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={(event) => this.addUser(event)}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input value={this.state.newfirst} className={`${this.state.error} form-control`} type="text"  name="first-name" onChange={this.updateFirst.bind(this)} />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input value={this.state.newlast} className={`${this.state.error} form-control`} type="text"  name="last-name" onChange={this.updateLast.bind(this)} />
              </div>

              <div className="action">
                <button type="submit" className="btn btn-primary">Agregar Invitado</button>
              </div>
            </form>

            <table className="table bordered-table table-striped">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Apellido</th>
                </tr>
              </thead>
              <tbody>
                {this.state.guests.map((guest) =>
                  <tr>
                    <td>{guest.first}</td>
                    <td>{guest.last}</td>
                  </tr>)
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App