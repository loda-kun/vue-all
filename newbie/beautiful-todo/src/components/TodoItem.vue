<template>
    <div class="form-input">
        <a-checkbox @change="onChange" v-bind:class="{ completed: task.completed }" v-bind:checked="task.completed">
            {{task.title}}
        </a-checkbox>
        <a class="float-right"><a-icon slot="suffix" type="close-circle" @click="completeTask" /></a>
    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        props:{
            task: Object
        },
        methods:{
            onChange(){
                this.task.completed = !this.task.completed;
            },
            completeTask(){
                console.log("CLose task");
            }
        }
    }
</script>

<style scoped>
.completed{
    text-decoration: line-through;
}
</style>