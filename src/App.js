import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      guests: [],
      firstName: '',
      lastName: '',
      error: '',
    }
  }

  addUser = (event) => {
    event.preventDefault();
    if (this.state.firstName === '' || this.state.lastName === '') {
      this.setState({ error: 'error'})
    } else {
      let oldTasks = this.state.guests;
      let newTask = { first: this.state.firstName, last: this.state.lastName };
      this.setState({
        guests: [...oldTasks, newTask],
        firstName: '',
        lastName: '',
      })
    }

  }

  updateFirst = (event) => {
    this.setState({
      firstName: event.target.value
    });
  }

  updateLast = (event) => {
    this.setState({
      lastName: event.target.value
    });
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <form onSubmit={(event) => this.addUser(event)}>
              <div className="form-group">
                <label htmlFor="first-name">Nombre</label>
                <input type="text" className= {`${this.state.error} form-control`} name="first-name" value={this.state.firstName} onChange={this.updateFirst} />
              </div>

              <div className="form-group">
                <label htmlFor="last-name">Apellido</label>
                <input type="text" className= {`${this.state.error} form-control`} name="last-name" value={this.state.lastName} onChange={this.updateLast} />
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
                {this.state.guests.map((guest, index) =>
                <tr key={index}>
                  <td>{guest.first}</td>
                  <td>{guest.last}</td>
                </tr>)}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    )
  }
}

export default App


