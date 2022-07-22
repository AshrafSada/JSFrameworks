<script>
    import { onMount } from "svelte";
    
    let todos = [];
    let todoTitle = "";

    function addTodo() {
        todos = [...todos, todoTitle];
        localStorage.setItem("todos", JSON.stringify(todos));
    }

    onMount(() => {
        const availableTodos = JSON.parse(localStorage.getItem("todos"));
        todos = availableTodos || [];
    });
</script>

<div>
    <h1>Svelte Todo App</h1>
    <hr />
    <ul>
        {#each todos as todo}
             <li>{todo}</li>
        {/each}
    </ul>
    <hr />
    <form on:submit|preventDefault={addTodo}>
        <input type="text" bind:value={todoTitle} />
        <input type="submit" value="Add Todo" />
    </form>
</div>

<style>
    input[type="submit"] {
        padding: 0.33rem;
        border: 1px solid magenta;
        border-radius: 3px;
    }
</style>
