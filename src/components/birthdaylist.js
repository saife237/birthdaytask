import React from 'react'

const Birthdaylist = (props) => {
    const {people} = props
  return people.map((person) => {
      const {id,name,age,image} = person
      return(
        <article key={id} className="Person">
        <img src={image} alt={name}/>
        <div>
    <h5>{name}</h5>
    <p>{age} in years</p>
  </div>
    </article>
      )
})
}

export default Birthdaylist;