import {action, reaction, observable, observe, computed, autorun} from 'mobx';
import autobind from 'autobind-decorator'
import remotedev from 'mobx-remotedev';

@autobind
class CounterStore {
  @observable counter = 0;
  @observable total = 0;

  constructor(){
    reaction(()=>this.counter, this.increaseTotal);
  }

  @action increaseTotal(){
    this.total++;
  }

  @action increase(){
    this.counter++;
  }

  @action decrease(){
    this.counter--;
  }
}

const counter = remotedev(new CounterStore(), { remote: true });

export default counter;
