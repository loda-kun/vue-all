<template>
    <div>
        <a-checkbox @change="onChange"
                    class="float-left"
                    :class="{ completed: localTask.completed }"
                    :checked="localTask.completed">
            {{localTask.title}}
        </a-checkbox>
        <a class="float-right">
            <a-icon lass="float-right"
                    type="close-circle"
                    @click="completeTask"/>
        </a>
    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        props: {
            task: Object
        },
        data(){
            return {
                localTask: this.task
            }
        },
        methods: {
            onChange() {
                this.localTask.completed = !this.localTask.completed;
            },
            completeTask() {
                this.$emit('completeTask', this.localTask.id);
            }
        }
    }
</script>

<style scoped>
    div {
        width: 100%;
    }

    .completed {
        text-decoration: line-through;
    }
</style>