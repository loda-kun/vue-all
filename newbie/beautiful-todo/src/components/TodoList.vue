<template>
    <div class="mt-2">
        <h2>Uncompleted</h2>

        <div class="list-group mt-2" role="tablist">
            <div v-for="todo in todos" v-bind:key="todo.id" class="list-group-item d-flex" role="tab">
                <TodoItem :task="todo"/>
            </div>
        </div>

    </div>
</template>

<script>
    import TodoItem from './TodoItem'

    export default {
        name: "TodoList",
        components:{
            TodoItem
        },
        props:{
            todos: Array
        }
    }
</script>

<style scoped>

</style>