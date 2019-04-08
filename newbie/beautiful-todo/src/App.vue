<template>
    <div id="app">
        <div class="container">
            <h2>Todo App</h2>
            <AddTodo @addTask="addTask"/>
            <div class="mt-3">
                <h2>Uncompleted</h2>
            </div>
            <TodoList :todos="uncompletedTasks" @completeTask="completeTask"/>
            <div class="mt-3">
                <h2>Completed</h2>
            </div>
            <TodoList :todos="completedTasks" @completeTask="completeTask"/>
        </div>
    </div>

</template>

<script>
    import AddTodo from './components/AddTodo'
    import TodoList from './components/TodoList'
    import axios from 'axios'

    export default {
        name: 'app',
        components: {
            AddTodo,
            TodoList
        },
        data() {
            return {
                todos: []
            }
        },
        created() {
            axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
                .then(res => this.todos = res.data)
                .catch(err => console.log(err));

        },
        methods: {
            addTask(task) {
                axios.post("https://jsonplaceholder.typicode.com/todos", {
                    title: task,
                    completed: false
                }).then(res => this.todos.push(res.data))
                    .catch(err => console.log(err));
            },
            completeTask(id) {
                this.todos = this.todos
                    .filter(todo => todo.id !== id);
            }
        },
        computed: {
            uncompletedTasks() {
                return this.todos.filter(todo => !todo.completed);
            },
            completedTasks() {
                return this.todos.filter(todo => todo.completed);
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
