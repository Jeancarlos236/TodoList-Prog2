import React, { Component } from "react";
import "@ionic/core/css/core.css";
import "@ionic/core/css/ionic.bundle.css";
import "./index.css";
import {
  IonApp,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonItem,
  IonList,
  IonLabel,
  IonItemSliding,
  IonItemOption,
  IonItemOptions,
  IonInput,
  IonButton
} from "@ionic/react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      newTodo: ""
    };
  }

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, this.state.newTodo],
      newTodo: ""
    });
  };

  todoChanged = event => {
    this.setState({ newTodo: event.target.value });
  };

  removeTodo = index => {
    let arr = this.state.todos.filter((todo, i) => i !== index);
    console.log(arr);
    this.setState({ todos: arr });
  };

  renderToDoList = () => {
    return this.state.todos.map((todo, index) => {
      return (
        <IonItem>
          <IonLabel>{todo}</IonLabel>
          <IonButton onClick={() => this.removeTodo(index)}>Eliminar</IonButton>
        </IonItem>
      );
    });
  };

  render() {
    return (
      <IonApp>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle>Tu Lista de Tareas</IonCardTitle>
            </IonCardHeader>
          </IonCard>

          <IonItem>
            <IonInput
              placeholder="Agregar Tarea..."
              onIonChange={this.todoChanged}
              value={this.state.newTodo}
            ></IonInput>
            <IonButton fill="outline" onClick={this.addTodo}>
              Añadir Tarea
            </IonButton>
          </IonItem>

          <IonList>{this.renderToDoList()}</IonList>
        </IonContent>
        <IonContent></IonContent>
      </IonApp>
    );
  }
}

export default App;
