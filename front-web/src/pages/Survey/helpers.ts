export const nameValidations = {    
  required: 'Campo obrigatório',
  minLength: {
    value: 3,
    message: 'Nome muito curto'
  },
  pattern: {
    value: /^[A-z-À-ú ]+$/,
    message: 'Nome inválido'
  }
}

export const ageValidations = {    
  required: 'Campo obrigatório',
  pattern: {
    value: /^[0-9]+$/,
    message: 'Digite apenas números'
  }
}

export const gameIdValidations = {
  required: 'Selecione um jogo da lista',
}
