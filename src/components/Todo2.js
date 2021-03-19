import { Paper } from '@material-ui/core';
import React, { Component } from 'react';
import TodoItems from "./TodoItems";

class Todo extends Component {
    constructor(props) {
        super(props);
     
        this.state = {
            items: []
        };

        this.addItem = this.addItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
    };
    addItem(e) {
        if (this._inputElement.value !== "") {
            var newItem = {
                text: this._inputElement.value,
                key: Date.now()
            };
            console.log(newItem);
            this.setState((prevState) => {
                return {
                    items: prevState.items.concat(newItem)
                };
            });

            this._inputElement.value = "";
        }
        e.preventDefault();
    }
    deleteItem(key) {
        var filteredItems = this.state.items.filter(function (item) {
            return (item.key !== key);
        });
        this.setState({
            items: filteredItems
        });
    }



    render() {
    return (
      <div className="todo" >
          <Paper >

          <div className="todoHeader" >
          <form className="todo-form" onSubmit={this.addItem} >
              <input ref={(a) => this._inputElement = a} placeholder="Add TODO items"></input>
              <button type="submit">Add</button>
          </form>
          </div>
          <TodoItems entries={this.state.items} delete={this.deleteItem} />
          </Paper>
      </div>

    )
  }
}
export default Todo;



// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';

// const useStyles = makeStyles((theme) => ({
//     root: {
//         padding: 0,
//         margin: 0,
//         flexGrow: 1,
//         width: "100vw",
//         height: "100vh",
//         backgroundColor: "#000000",
//         fontFamily: '"Courier New", Courier, monospace',
//     },
//     paper: {
//         position: "relative",
//         width: "25vw",    
//         height: "45vh",
//         backgroundColor: "#a29bfe",
//         borderRadius: 0,
//         borderWidth: 0,
//         cursor: "pointer",
//     },
//     question: {
//         backgroundColor: "inherit",
//         width: "100vw",
//         height: "10vh",
//         textAlign: "center",
//         color: "#ffffff",
//     }
// }));

// export default function ColorSelect({ isSelected, onItemClick }) {
// //   const [spacing, setSpacing] = React.useState(2);
//   const classes = useStyles();
//   const bgColors = ["#d8d3d6", "#f8fd89", "#b987dc", "#a5f7e1", "#96adfc", "#F8EFBA", "#ffb8b8", "#1e272e"]; 


//   const handleClick = (event) => {
//     document.querySelector("body").style.backgroundColor = event.target.style.backgroundColor;
//     onItemClick();
//   };
//   const handleMouseOver = (event) => {
//     event.target.style.opacity = "0.7";
//   };
//   const handleMouseLeave = (event) => {
//     event.target.style.opacity = "1.0";
//   };
  
//   isSelected = true;

//   return (
//     <Grid container className={classes.root} spacing={2}>
//       <Grid item xs={12} className={classes.question}>
//           <h1>
//               What is your VIBE today?
//           </h1>
//       </Grid>
//       <Grid item xs={12}>
//         <Grid container justify="center" spacing={2}>
//           {[0, 1, 2, 3, 4, 5, 6, 7].map((value) => (
//               <Paper className={classes.paper} style={{backgroundColor: bgColors[value]}} onClick={handleClick} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />
//               ))}
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }
