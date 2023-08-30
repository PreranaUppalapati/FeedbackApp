function Header({text}) {
  return (
    <header>
     <div className="container">
        <h2>{text}</h2>

     </div>

    </header>
  )
}

Header.defaultProps = {
    text: 'Feedback UI',
    bgColor: 'rgba(0,0,0)'
}
export default Header
