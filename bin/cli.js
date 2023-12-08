#!/usr/bin/env node

import { execSync } from 'child_process'

const runCommand = (command) => {
  try {
    execSync(`${command}`, { stdio: 'inherit' })
  } catch (error) {
    console.error(`Falha na execucao do ${command} `, error)
    return false
  }

  return true
}

const repoName = process.argv[2]
const gitCheckoutCommand = ` git clone --depth 1 https://github.com/llucasgomes/simple-template-nodejs ${repoName}`
const installDepsCommand = `cd ${repoName} && yarn install`

console.log(`Clonando o repositorio com o nome ${repoName}`)
const checkOut = runCommand(gitCheckoutCommand)
if (!checkOut) process.exit(-1)

console.log(`Instalando as dependecias para ${repoName}`)
const installDeps = runCommand(installDepsCommand)
if (!installDeps) process.exit(-1)

console.log(
  `Parabéns! Você está pronto, siga o seguinte comando para iniciar seu projeto`,
)

console.log(` `)
console.log(`cd ${repoName}`)
console.log(`yarn start`)
