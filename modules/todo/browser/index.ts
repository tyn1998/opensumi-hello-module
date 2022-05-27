import { Provider, Injectable } from "@opensumi/di";
import { BrowserModule } from "@opensumi/ide-core-browser";

@Injectable()
export class TodoListModule extends BrowserModule {
  providers: Provider[] = [];
}
