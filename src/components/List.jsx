import React, { useState, useEffect } from 'react';
import "./List.css"

const List = () => {
	const [list, setList] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("contacts"));
        if (Array.isArray(data))
        {
            setList(data)
        }

        else if (data === null)
        {
            throw new Error ("Eroare la incarcarea din localStorage")
        }
    }, []);
    console.log(list)

    const handleDelete = (id) => {
        setList(prev => prev.filter(c => c.id !== id));
        const saved = JSON.parse(localStorage.getItem("contacts")) || [];
        const update = saved.filter(c => c.id !== id);
        localStorage.setItem("contacts", JSON.stringify(update))
    }


  return (
	<div className = "listGrup">
        <table className="tableContacts">
        <thead>
            <tr>
                <th>Nume</th>
                <th>Telefon</th>
                <th>Optiuni</th>
            </tr>
        </thead>
        <tbody>
            {list.map((item, idx) => (
                <tr key={idx}>
                    <td>{item.nume}</td>
                    <td>{item.telefon}</td>
                    <td><button type="button" className="bt-delete" onClick={() => handleDelete(item.id)}>Sterge</button></td>
                </tr>
            ))}
        </tbody>
        </table>
	</div>
  );
};

export default List;