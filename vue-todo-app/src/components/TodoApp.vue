<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <hr>
    <ul>
      <li v-for="todo in todos" :key="todo">{{ todo }}</li>
    </ul>
    <hr>
    <form v-on:submit.prevent="addTodo">
      <input v-model="todoTitle">
      <input type="submit" value="Add Todo">
    </form>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  props: {
    msg: String
  },
  data: function () {
    return {
      todos: [],
      todoTitle: '',
    };
  },
  methods: {
    addTodo: function () {
      this.todos = [...this.todos, this.todoTitle];
      localStorage.setItem('todos', JSON.stringify(this.todos));
    }
  },
  mounted: function () {
    const availableTodos = JSON.parse(localStorage.getItem('todos'));
    this.todos = availableTodos || [];
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0rem;
  margin-left: 13em;
}

li {
  padding: .5rem;
  text-align: left;
}



a {
  color: #42b983;
}
</style>
