function toMoney(value: number): string {
  return value.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  })
}

function toDateBR(date: string): string {
  return new Date(date).toLocaleDateString('pt-BR')
}

const parse = { toMoney, toDateBR }

export default parse
