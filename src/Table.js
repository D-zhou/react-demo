import React from 'react'

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = (props) => {
    const rows = props.characterData.map((item, index) => {
        return (
            <tr key={index}>
                <td>{item.name}</td>
                <td>{item.job}</td>
                <td>
                    <button onClick={() => props.removeCharacterData(index)}>Delete</button>
                </td>
            </tr>
        )
    });

    return <tbody>{rows}</tbody>
}

const Table = (props) => {
    const { characterData, removeCharacterData } = props;

    return (
        <table>
            <TableHeader />
            <TableBody characterData={ characterData } removeCharacterData={ removeCharacterData } />
        </table>
    )
}

export default Table
