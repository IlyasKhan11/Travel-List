export default function App(){

  return <div className="app">
    <Logo/>
    <Form/>
    <PackingList/>
    <Stats/>
  </div>




}


function Logo(){
  return <h1>🐱‍🐉Far Away</h1>

}

function Form(){
  return (
    <div className="add-form">
      <h3>What do you want for tour 😍 trip?</h3>
    </div>
  )


}

function PackingList(){

  return <div className="list">List</div>


}

function Stats(){
  return(
    <footer>
      <em>💼 you have X items on your list, and you already packed X (X%)</em>
    </footer>
  )






}