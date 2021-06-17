import axios from 'axios'

function sayHelloTo(name: string): string {
  return `🦄 Hello ${name} !`;
}

function mamacita(): Promise<any> {
  return axios.get('http://localhost:8000')
}

export { sayHelloTo, mamacita }


