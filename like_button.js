function Description() {
  const text = "The place to buy all the plants you've ever wanted"
  const emojis = "🤑🤑🤑"
  return (<p>{text.slice(0, 5) + emojis}</p>)
}


function Header() {
  return (<div>
      <h1>Jungle House</h1>
  </div>)
}


function Main() {
  const redflower = 20
  const jasmine = 1000
  const littlejasmine = 900;
  return (<div>
    <h1>card</h1>
    <ul>
    <li>அரளிப்பூ: {redflower}₹</li>
    <li>மல்லி: {jasmine}₹</li>
    <li>நந்தியாவட்டை: {littlejasmine}₹</li>
    </ul>
      Total: {redflower + jasmine + littlejasmine}₹
  </div>)
}

//ReactDOM.render(<React.Fragment><Header /><Description /></React.Fragment>, document.getElementById("root"))
ReactDOM.render(<div> <Header/><Main/> </div>, 
  document.getElementById("root"))