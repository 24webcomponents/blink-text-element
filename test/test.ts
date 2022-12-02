import {assert} from '@open-wc/testing'
import '../src/blink-text-element'

describe('blink-text-element', function () {
  describe('element creation', function () {
    it('creates from document.createElement', function () {
      const el = document.createElement('blink-text')
      assert.equal('BLINK-TEXT', el.nodeName)
    })

    it('creates from constructor', function () {
      const el = new window.BlinkTextElement()
      assert.equal('BLINK-TEXT', el.nodeName)
    })
  })
})
