
import './App.css';
import myImage from './image.jpg';
function App(){
 
  return(
    <div style = {{backgroundColor: "#dfe6e9", height: "100vh"}}>
      <div style = {{display: "flex", justifyContent: "center"}}>
        <div>
        <div>
          <PostComponent/>
          <br/>
       </div>
       <div>
        <PostComponent/>
        <br/>
        </div>  
      <PostComponent/>
      </div>
    </div> 
    </div>
  )
}
const style = {
  width: 200,
  backgroundColor: "white",
  borderColor: "gray",
  borderWidth: 1,
  justifyContent: "center",
  borderRadius: 5,
  padding: 20
  //display: "flex",
}

function PostComponent() {
  return (
    <div style = {style}>
    <div style={{display: "flex"}}>
      <img
        src={myImage}
        style={{
          width: 40,
          height: 40,
          borderRadius: 20,
        }}
        alt="Post"
      />
      <div style = {{fontSize: 10, marginLeft: 2}}>
        <b>
        100xdevs
        </b>
        <div>23,7777 followers</div>
        <div>12m</div>
      </div>
    </div>
    <div style = {{fontSize: 12}}>
    Want to know how to win big? Check out how to make it true for long run of time.
  </div>
  </div>
  );
}

export default App;
