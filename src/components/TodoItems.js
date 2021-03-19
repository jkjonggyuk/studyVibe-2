import { Button, Card, CardContent, Typography } from "@material-ui/core";
import React, { Component } from "react";

class TodoItems extends Component {
    constructor(props) {
        super(props);
        
        this.createTasks = this.createTasks.bind(this);
    }
    delete(key) {
        this.props.delete(key);
    }
    createTasks(item) {
        return (
            // <>
            // <li key={item.key}>{item.text}</li>
            // <button onClick={ () => this.delete(item.key) } >Delete</button>
            // </>
            <Card>
                <CardContent style={{flexGrow: 1, flexDirection: "row"}}>
                    <Typography >{item.text}</Typography>
                    <Button onClick={ () => this.delete(item.key)  } >Delete</Button>
                </CardContent>
            </Card>
        )
    }
    render() {
        var todoEntries = this.props.entries;
        var listItems = todoEntries.map(this.createTasks);

        return (
            <>
            {/* // <ul className="todoList"> */}
                {listItems}
            {/* // </ul> */}
            </>
        );
    }
};

export default TodoItems;