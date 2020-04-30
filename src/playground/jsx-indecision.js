
console.log('App is running');

//var template = React.CreateElement("h1",null,"HEllo");

var app = {
title:'hello its my title',
subtitle:'my subtitle',
options:[]
};

const onsubmitform = (e) => {
e.preventDefault();
const option = e.target.elements.option.value;

if(option){
    app.options.push(option);
    e.target.elements.option.value = ''; 
    render();   
}
};

const removeAll = ()=>{

    app.options=[];
    render();
};

const appRoot = document.getElementById('app');

const numbers = [10,20,30];
const render = () =>{
    const template =(  
        <div>
           <h1>{app.title}</h1>
           {app.subtitle &&<p>{app.subtitle}</p>}
           <p>{app.options.length > 0 ?'options here':'no options'}</p>
           <p>{app.options.length}</p>
           <button onClick={removeAll}>Remove All</button>
           {/* {
               numbers.map((number)=>{
               return <p key={number}>Number:{number}</p>

               })

           } */}
           <ol>
               {
                
                app.options.map((option)=> <li key={option}>{option}</li>)

               }
           </ol>
           <form onSubmit={onsubmitform}>
               <input type="text" name="option"/>
               <button>add option</button>
           </form>
        </div> 
   );
   ReactDOM.render(template,appRoot);
};

render();
