$(document).ready(function() {
    loadTodos();

    $("#newTodoBtn").click(function() {
        let task = prompt("Enter a new TO DO:");
        if (task && task.trim() !== "") {
            addTodo(task.trim());
            saveTodos();
        }
    });

    function addTodo(text) {
        let $todoDiv = $("<div>", {
            "class": "todo",
            "text": text
        }).click(function() {
            removeTodo($(this));
        });

        $("#ft_list").prepend($todoDiv);
    }

    function removeTodo($todo) {
        if (confirm("Do you want to delete this TO DO?")) {
            $todo.remove();
            saveTodos();
        }
    }

    function saveTodos() {
        let todos = $(".todo").map(function() {
            return $(this).text();
        }).get();

        document.cookie = "todos=" + encodeURIComponent(JSON.stringify(todos)) + "; path=/";
    }

    function loadTodos() {
        let cookies = document.cookie.split("; ");
        let todoCookie = cookies.find(row => row.startsWith("todos="));
        
        if (todoCookie) {
            let todoList = JSON.parse(decodeURIComponent(todoCookie.split("=")[1]));
            todoList.reverse().forEach(addTodo); 
        }
    }
});
