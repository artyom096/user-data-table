import classes from './Table.module.css'
import React from 'react'

function Table(props) {

    function sortArrow() {
        if (props.fieldSort) {
            return props.sortMethod === 'asc'
                ? <small>&#11014;</small>
                : <small>&#11015;</small>
        }
    }

    return (
        <div>
            {props.data
                ? <table className='table table-bordered'>
                    <thead className={classes.thead}>
                        <tr>
                            <th onClick={props.onSort.bind(null, 'id')}>
                                ID {props.fieldSort === 'id'
                                    ? sortArrow()
                                    : null
                                }
                            </th>
                            <th onClick={props.onSort.bind(null, 'firstName')}>
                                First Name {props.fieldSort === 'firstName'
                                    ? sortArrow()
                                    : null
                                }
                            </th>
                            <th onClick={props.onSort.bind(null, 'lastName')}>
                                Last Name {props.fieldSort === 'lastName'
                                    ? sortArrow()
                                    : null
                                }
                            </th>
                            <th onClick={props.onSort.bind(null, 'email')}>
                                Email {props.fieldSort === 'email'
                                    ? sortArrow()
                                    : null
                                }
                            </th>
                            <th onClick={props.onSort.bind(null, 'phone')}>
                                Phone {props.fieldSort === 'phone'
                                    ? sortArrow()
                                    : null
                                }
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data.map((item, key) => {
                            return (
                                <tr
                                    key={key + item.phone}
                                    onClick={props.openInformation.bind(null, item)}
                                >
                                    <td>{item.id}</td>
                                    <td>{item.firstName}</td>
                                    <td>{item.lastName}</td>
                                    <td>{item.email}</td>
                                    <td>{item.phone}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                  </table>
                : <div><p>Ничего не найдено!</p></div>
            }
        </div>
    )
}

export default Table