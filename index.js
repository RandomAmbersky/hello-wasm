const js = import('./pkg/hello_wasm')
js.then(js => {
  js.greet("WebAssembly")
})
