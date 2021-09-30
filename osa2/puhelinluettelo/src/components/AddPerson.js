import React from 'react'

const AddPerson =  (props) => 
  <form onSubmit={props.addPerson}>
      <div>
        Name: <input value={props.newName} onChange={props.onChangeName}/>
      </div>
      <div>
        Number: <input value={props.newNumber} onChange={props.onChangeNumber}/>
      </div>
      <div>
        <button type="submit">Add</button>
      </div>
  </form>

export default AddPerson;