// Manage LocalStorage


function save(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
}

function load(name) {
    var value = localStorage.getItem(name);
    if (value) {
        return JSON.parse(value);
    }
}


Vue.component('todo', {
    template: `
    <div class="todo border" :class="{ finished:task.finished }">
        <input type="checkbox" v-model="task.finished"/>
        <h2>{{task.title}}</h2>
        <p>{{task.content}}</p>
        <p class="bold category">{{task.category}}</p>
        <p class="deadline">{{task.deadline}}</p>
        <p class="italic creationDate">{{task.creationDate}}</p>
        <button @click="$emit('remove', task)">Supprimer</button>
        <button @click="task.archived = !task.archived">{{ task.archived ? "Restaurer" : "Archiver" }}</button>
    </div>`,
    props: ['task']
});


var app = new Vue ({
    el: '#app',
    data: function() {
        return {

            title: "",
            content:"",
            category:"",
            deadline:"",
            // Use || to provide a default value when loaded value is false.
            todos : load('todos') || [],
            newCategory : '',
            categories : load('categories') || [],
            showArchives : false
        }
    },
    computed : {
        displayTodos : function() {
            return this.todos.filter(function(task) {
               return !task.archived;
            });
        },
        archivedTodos : function() {
            return this.todos.filter(function(task) {
               return task.archived;
            });
        }
    },
    methods: {
        addToDo: function() {
            this.todos.push({
                title: this.title,
                content: this.content,
                category: this.category,
                deadline: this.deadline,
                creationDate: "11/O1/2019",
                finished: false,
                archived: false
            })
            this.title="";
            this.content="";
            this.category="";
            this.deadline="";  
        },
        removeTodo(task) {
            var index = this.todos.indexOf(task);
            if (index != -1) {
                this.todos.splice(index, 1);
            }
        },
        addCategory : function() {
            this.categories.push(this.newCategory);
            this.newCategory = "";
        }
    },
    watch : {
        todos : {
            handler: function (val) {
                save("todos", val);
            },
            deep: true
        },
        categories : {
            handler: function (val) {
                save("categories", val);
            },
            deep: true
        }
    }
});
