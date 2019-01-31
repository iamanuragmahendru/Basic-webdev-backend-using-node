$(function() {
    let newTodoBox = $('#newtodo')
    let addtodoBtn = $('#addBtn')
    let todoList = $('#todoList')
    
    addtodoBtn.click(function() {
        let newTodo = newTodoBox.val();
        
        $.post('/todos', {task: newTodo}, function(data) {
            todoList.empty();
            for(todo of data) {
                todoList.append("<li>" + todo.task + "</li>")
            }
        })
    })
})

