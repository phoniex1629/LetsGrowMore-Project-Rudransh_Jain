import React, {Component} from "react";
import "./table.css";
class Table extends Component {
    constructor(props) {
      super(props)
      this.state = {
        users: [],
        isLoading: false,
        isError: false
      }
    }
  async componentDidMount() {
    this.setState({ isLoading: true })
    const response = await fetch('https://reqres.in/api/users?page=1')
    if (response.ok) {
        
      const users = await response.json();
      console.log(users);
      this.setState({ users:users.data, isLoading: false })
    } else {
      this.setState({ isError: true, isLoading: false })
    }
  } 
  render() {
    const { users, isLoading, isError } = this.state
  
    if (isLoading) {
      return <div>Loading...</div>
    }
  
    if (isError) {
      return <div>Error</div>
    }
  
    return users.length > 0
      ? (
        <table>
          <thead>
            <tr>
              {this.renderTableHeader()}
            </tr>
          </thead>
          <tbody>
            {this.renderTableRows()}
          </tbody>
        </table>
      ) : (
        <div>
          No users.
      </div>
      )
  }
  renderTableHeader = () => {
    return Object.keys(this.state.users[0]).map(attr => <th className="aligning" key={attr}>{attr.toUpperCase()}</th>)
}
renderTableRows = () => {
  return this.state.users.map(user => {
    return (
      <tr key={user.id}>
        <td className="aligning">{user.id}</td>
        <td className="aligning">{user.email}</td>
        <td className="aligning">{user.first_name}</td>
        <td className="aligning">{user.last_name}</td>
        <td className="aligning"><img src={user.avatar} alt="" /></td>
      </tr>
    )
  })
}
}

export default Table;

