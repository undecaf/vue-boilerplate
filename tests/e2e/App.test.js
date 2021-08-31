import { Selector } from 'testcafe'


fixture('App')
    .page('http://localhost:8080/')

test('loads and has the correct title', async t => {
    await t
        .expect(Selector('.md-toolbar').innerText).contains('Vue.js')
})

test('can navigate to the info view', async t => {
    await t
        .click(Selector('.md-toolbar-section-end a'))
        .expect(Selector('.md-app-content').innerText).contains('Info view')
})

test('can navigate back to the home view', async t => {
    await t
        .click(Selector('.md-toolbar-section-end a'))
        .click(Selector('.md-toolbar-section-start a'))
        .expect(Selector('.md-app-content').innerText).contains('Default view')
})
