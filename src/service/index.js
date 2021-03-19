
export const getFromLocalStorage = (key) => {
    const value = localStorage.getItem(key); 
  
    if (key === "username" || key === "endtime") {
        return value;
    } else if (key === "todo") {
        let items = [];

        if (value) {
            items = JSON.parse(value);
        }

        return items;
    }
}
  
export const setToLocalStorage = (key, data) => {
    if (key === "username" || key === "endtime") {
        localStorage.setItem(key, data);
    } else if (key === "todo" && data.trim()) {
        let todoList = getFromLocalStorage("todo");
        const newId = todoList.length;
        const newTodo = {id: newId, item: data.trim()};
        todoList.push(newTodo);
        localStorage.setItem(key, JSON.stringify(todoList));
    }
}

export const deleteFromLocalStorage = (key, id) => {
    if (key === "todo") {
        const todoList = getFromLocalStorage("todo");
        let newId = 0;
        let newList = [];
        for (let i = 0; i < todoList.length; i++) {
            if (todoList[i].id !== id) {
                newList.push({id: newId, item: todoList[i].item});
                newId++;
            }
        }

        localStorage.setItem(key, JSON.stringify(newList));
    }
}