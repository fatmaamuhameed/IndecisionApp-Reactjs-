class VisibilityToggle extends React.Component{
    constructor(props){
        super(props);
        this.HandleVisibality=this.HandleVisibality.bind(this);
        this.state={
            visibiltiy:false
        };
    }
    HandleVisibality(){
        //alert('hooh');
        this.setState((preventstate)=>{
            return{
                visibiltiy: !preventstate.visibiltiy
            };
        });
    }
    render(){
        return(
        <div>   
        <h1>Visibility Toggle</h1>
        <button onClick={this.HandleVisibality}>{this.state.visibiltiy? 'hide details':'show details'}</button>
         {this.state.visibiltiy && (<div><p>here some details ...</p></div>)}
     </div>);
    }
}

ReactDOM.render(<VisibilityToggle />,document.getElementById('app'));

// console.log('App is running');

// let Visibility= false;
// const appRoot = document.getElementById('app');

// const detail = () =>{

//     Visibility = !Visibility;
//     render();
// };


// const render = ()=>{

//     const template=(
//         <div>
        
//         <h1>Visibility Toggle</h1>
//         <button onClick={detail}>
//             {Visibility? 'hide details':'show details'}
//         </button>
//         {Visibility && (
//     <div>
//         <p>here some details ...</p>
//     </div>
//         )}
//         </div>);
//         ReactDOM.render(template,appRoot);
// };

// render();