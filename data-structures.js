class ArrayList {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  push(val) {
    this.data[this.length] = val;
    this.length += 1;
  }
  pop() {
    return this.delete(this.length -1);
  }
  get(index) {
    return this.data[index];
  }
  delete(index) {
    const deleted = this.data[index];
    this._collapseTo(index);
    return deleted;
  }
  _collapseTo(index) {
    if (index > array.length - 1) {
      return;
    }
    for (let i = index; i < this.length; i += 1){
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length -1];
    this.length -= 1;
  }
}
