import { Event } from '@opensumi/ide-core-common';
export interface ITodoService {
  showMessage(message: string): void;
  addTodo(): void;
  onDidChange: Event<string>;
}

export const ITodoService = Symbol('ITodoService');

export namespace TODO_COMMANDS {
  export const ADD_TODO = {
    id: 'todo.add',
  };
}
