const dest = {
  set id(x) {
    console.log(x)
  },
  get id() {
    console.log(this.id)
  }
}

Object.assign(dest, { id: 'first'}, { id: 'second'})

