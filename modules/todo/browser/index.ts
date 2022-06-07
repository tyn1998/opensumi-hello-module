import {TodoContribution} from "./todo.contribution";
import { Provider, Injectable } from '@opensumi/di';
import { BrowserModule } from '@opensumi/ide-core-browser';
import { TodoService } from './todo.service';
import { ITodoService } from '../common';

@Injectable()
export class TodoListModule extends BrowserModule {
  providers: Provider[] = [
    {
      token: ITodoService,
      useClass: TodoService,
    },
    TodoContribution
  ];
}
