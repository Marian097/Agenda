import React, { useState, useEffect } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [output, setOutput] = useState("");
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem("contacts");
    return saved ? JSON.parse(saved) : [];
  })

 
  function handleSubmit(e) {
        e.preventDefault();
        if (phone.length === 10 && phone.startsWith("07")) {
            setContacts(prev => [...prev, { id:crypto.randomUUID(), nume: name.trim(), telefon: phone.trim() }]);
            alert("Contactul a fost adaugat cu succes.")
        }
        else {
            setOutput("Numarul de telefon este invalid.");
        }
        setName("");
        setPhone("");
    }

  
  useEffect(() => {
    console.log("contacts (actual):", contacts);
    localStorage.setItem("contacts", JSON.stringify(contacts));
  },[contacts]);

  return (
    <div className = "formGrup">
    <form id="form" onSubmit={handleSubmit}>
      <label>Nume: </label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    

      <label>Telefon:</label>
      <input
        type="tel"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <p>{output}</p>

      <button className="bt-add" type="submit">
        Adaugă
      </button>
    </form>
    </div>
  );
};

export default Form;
