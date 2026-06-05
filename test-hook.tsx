import { createElement } from 'react'
import { renderToString } from 'react-dom/server'
import { useLocalStorage } from './src/hooks/useLocalStorage'

function Test() {
  const [val, setVal] = useLocalStorage<string[]>('test-key', [])
  return createElement('div', null, JSON.stringify(val))
}

try {
  const html = renderToString(createElement(Test))
  console.log('Rendered:', html)
} catch (e) {
  console.error('Error:', e)
}
