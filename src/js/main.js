const { createApp } = Vue;

createApp({
    data() {
        return {
            apiUrl: 'serevr.php',
            todos: []
        }
    },
    methods:{
        getTodos(){
            axios.get('server.php')
            .then(response => {
                this.todos = response.data;
            });
        }
    },
    created(){
        this.getTodos();
    }

}).mount('#app');