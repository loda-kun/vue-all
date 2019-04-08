<template>
    <div class="components-input-demo-presuffix">
        <a-input placeholder="Basic usage"
                 v-model="task"
                 ref="todoInput">
            <a-icon slot="prefix" type="plus"/>
            <a-icon v-if="task" slot="suffix" type="close-circle" @click="onClose"/>
        </a-input>
    </div>
</template>

<script>
    export default {
        name: 'AddTodo',
        data() {
            return {
                task: ''
            }
        },
        methods: {
            onClose() {
                this.$refs.todoInput.focus();
                this.task = ''
            }
        }

    }
</script>