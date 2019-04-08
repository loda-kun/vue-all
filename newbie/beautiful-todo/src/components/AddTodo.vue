<template>
    <div class="components-input-demo-presuffix">
        <a-input placeholder="Basic usage"
                 v-model="task"
                 ref="todoInput"
                 @keyup.enter.native="onSubmit">
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
            onSubmit() {
                this.$emit('addTask', this.task);
                this.task=''
            },
            onClose() {
                this.$refs.todoInput.focus();
                this.task = ''
            }
        }

    }
</script>