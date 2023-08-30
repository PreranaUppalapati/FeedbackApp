function Card({children, reverse}) {
    // <div className= {`card ${reverse && 'reverse'}`}>
    // {children}
   // </div>
  return <div className="card"> {children} </div>
}

export default Card
