class Counter extends React.Component{
    constructor(props){
        super(props);
        this.HandleAddop=this.HandleAddop.bind(this);
        this.HandleMinop=this.HandleMinop.bind(this);
        this.HandleRestop=this.HandleRestop.bind(this);
        this.state={
            count:0
        };
    }
    componentDidMount() {
        try {
          const json = localStorage.getItem('count');
          const count = JSON.parse(json);
    
          if (count) {
            this.setState(() => ({ count }));
          }
        } catch (e) {
          // Do nothing at all
        }
      }
      componentDidUpdate(prevProps, prevState) {
        if (prevState.options.length !== this.state.options.length) {
          const json = JSON.stringify(this.state.options);
          localStorage.setItem('options', json);
        }
      }
      componentWillUnmount() {
        console.log('componentWillUnmount');
      }
    HandleAddop(){
        //console.log('handleadd');
        this.setState((preventState) => {
            return{
                count: preventState.count+1
        };
        });
    }
    HandleMinop(){
        //console.log('handleMinus');
        this.setState((preventState) => {
            return{
                count: preventState.count-1
        };
        });
    }
    HandleRestop(){
        //console.log('handlrest');
        this.setState(() => {
            return{
                count:0
        };
        });
    }
    render(){
        return(
            <div>
                <h1>Counter: {this.state.count}</h1>
                <button onClick={this.HandleAddop}>+1</button>
                <button onClick={this.HandleMinop}>-1</button>
                <button onClick={this.HandleRestop}>reset</button>
            </div>
        );
    }
}

Counter.defaultProps = {
    count :0
};
ReactDOM.render(<Counter />,document.getElementById('app'));


// var user ={
//     name:'fatma',
//     age:22,
//     location:'Abbassia'
//     };
    
//     var templateTwo=(
//     <div>
//     <h1>{user.name}</h1>
//     <p>{user.age}</p>
//     <p>{user.location}</p>
//     </div>
//     );
    
// let count = 0;
// const minusOne = () =>{
//     count--;
//     rendercountapp();
// //console.log('minusOne',count);
// };

// const addOne = () =>{
//     count++;
//     rendercountapp();
//     //console.log('addOne',count);
//     };

//     const Reset = () =>{
//         count=0;
//         rendercountapp();
//         //console.log('Reset',count);
//         };
        

// const rendercountapp = () =>{
//     const templateT = (
//         <div>
//         <h1>Count:{count}</h1>
//         <button onClick={addOne}>+1</button>
//         <button onClick={minusOne}> -1</button>
//         <button onClick={Reset}>reset</button>
        
//         </div>
//         );
        
// };

// rendercountapp();