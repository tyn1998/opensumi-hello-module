import { Injectable, Autowired } from '@opensumi/di';
import { IMessageService } from '@opensumi/ide-overlay';
import { Emitter, IQuickInputService } from '@opensumi/ide-core-browser';
import { ITodoService } from '../common';

@Injectable()
export class TodoService implements ITodoService {
  @Autowired(IMessageService)
  private messageService: IMessageService;

  @Autowired(IQuickInputService)
  private quickInputService: IQuickInputService;

  private onDidChangeEmitter: Emitter<string> = new Emitter();

  get onDidChange() {
    return this.onDidChangeEmitter.event;
  }

  showMessage = (message: string) => {
    this.messageService.info(message);
  };

  addTodo = async () => {
    const param = await this.quickInputService.open({
      placeHolder: '输入你的计划',
      value: ''
    });
    if (param !== undefined && param !== null) {
      this.onDidChangeEmitter.fire(param);
    }
  };
}
