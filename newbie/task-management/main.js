var app = new Vue({
    el: '#tasks',
    data:{
        tasks: [
            {body: 'Di choi', completed: false},
            {body: 'hoc truc tuyen', completed: false}
        ],

        newTask: ''
    },

    computed: {
        inProcessTasks: function(){
            console.log("hello");
            return this.tasks.filter(function (task){
                return !task.completed;
            });
            
        }
    },
      

    methods: {
        addTask: function(e){
            e.preventDefault();
            this.tasks.push({
                body: this.newTask,
                completed: false
            });

            this.newTask = ''
        },

        removeTask: function(index){
            console.log("remove: ", this.tasks[index]);
            this.tasks.splice(index, 1);
            
        },

        editTask: function(index){
            console.log("edit: ", this.tasks[index]);
            this.tasks.splice(index, 1);
            console.log(this.$refs.input.focus());

        },

        completeTask: function(index){
            console.log("complete: ", this.tasks[index]);
            this.tasks[index].completed = true;
        }
    }
})