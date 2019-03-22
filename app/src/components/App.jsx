import { createElement, Component } from 'react';  
import Todo from './Todo.jsx';

require('./first.scss');

export default class App extends Component {  
  render() {
    return createElement(Todo, {});
  }
}