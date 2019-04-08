<template>
    <div class="mt-2">
        <div class="list-group mt-2" role="tablist">
            <div v-for="todo in todos" :key="todo.id"
                 class="list-group-item d-flex" role="tab">
                <TodoItem :task="todo"
                          @completeTask="completeTask"

                />
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
        },
        methods:{
            completeTask(id){
                this.$emit('completeTask', id);
            }
        }
    }
</script>

<style scoped>

</style>