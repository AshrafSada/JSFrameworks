import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'NG Todos App';
  // angular is state management framework
  // state set for todos
  todos: string[] = [];
  todoTitle = '';

// angular app life cycle management
ngOnInit(){

}

  // add todo function
  addTodo(){
    this.todos.push(this.todoTitle);
    // using local storage
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}
