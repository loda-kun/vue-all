<template>
    <div id="app">
        <div class="container">
            <h2>Todo App</h2>
            <AddTodo />
            <TodoList :todos="todos" />

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
        data(){
            return {
                todos: []
            }
        },
        created() {
            axios.get("https://jsonplaceholder.typicode.com/todos?_limit=5")
                .then(res => this.todos = res.data)
                .catch(err => console.log(err));

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
