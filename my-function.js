function main(args) {
    let name = args.keyword || 'hello'
    let greeting = 'Samihan Jawalkar says ' + name + '!'
    console.log(greeting)
    return {"body": greeting}
  }
    