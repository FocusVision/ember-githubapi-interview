import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('search-list', 'Integration | Component | search list', {
  integration: true
})

test('it does not show list', function(assert) {
  this.render(hbs`
    {{search-list
      query=q
      model=model
    }}
  `)

  assert.equal(true, false)
})

test('it displays list', function(assert) {
  this.render(hbs`
    {{search-list
      query=q
      model=model
    }}
  `)

  assert.equal(true, false)
})

test('it displays user avatar and login name', function(assert) {
  this.render(hbs`
    {{search-list
      query=q
      model=model
    }}
  `)

  assert.equal(true, false)
})

test('displays empty message list', function(assert) {
  this.render(hbs`
    {{search-list
      query=q
      model=model
    }}
  `)

  assert.equal(true, false)
})
