module.exports = {
  prompt: ({ prompter }) =>
    new Promise(resolve => {
      prompter
        .prompt([
          {
            type: 'input',
            name: 'name',
            message: 'Component Name?',
          },
        ])
        .then(({ name }) => {
          resolve({
            name,
          })
        })
    }),
}
