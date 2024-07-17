import React, { Component } from 'react'

export class Categories extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categories : [
                {
                    key:'all',
                    name: 'Всі'
                },
                {
                    key:'sweet',
                    name: 'Солодкі пончики'
                },
                {
                    key:'vanilla',
                    name: 'Ванільні пончики'
                },
                {
                    key:'fruits',
                    name: 'Фруктові пончики'
                },
                {
                    key:'nut',
                    name: 'Горіхові пончики'
                }
            ]
        }
    }
  render() {
    return (
      <div className='categories'>
        {this.state.categories.map(el => (
            <div key={el.key} onClick={() => this.props.chooseCategory(el.key)}>{el.name}</div>
        ))}
      </div>
    )
  }
}

export default Categories