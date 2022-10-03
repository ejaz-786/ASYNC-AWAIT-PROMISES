import './App.css';

function App() {

    let Data = [
     {name:"ajay",profession:"hr"},
     {name:"vijay",profession:"hr"},
     {name:"sanjay",profession:"hr"}
    ]
  
    const getData = () =>{

      setTimeout(()=>{
        let output = "";
        Data.forEach((val)=>{
           output+= `<li>${val.name}</li>`
        });
       document.body.innerHTML = output;
      },1000)
    }

  
    const createData = (obj) =>{

      return new Promise((resolve,reject)=>{
        setTimeout(()=>{
          Data.push(obj);
          let error = false;
          if(!error){
            resolve();
          }
          else{
            reject("kuch sahi nahi hai ....");
          }
        },2000)
      })
    
     
    }
      // createData({name:"reshma",profession:"model"})
      // .then(getData)
      // .catch(err=>console.log(err)); 
      // getData();


      // ASYNC AWAIT 

      const Start = async() =>{
           await createData({name:"reshma",profession:"model"});
           getData();
      }
      Start();

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
