import { Selector } from 'testcafe'


fixture('App')
    .page('http://localhost:8080/')

test('loads and has the correct title', async t => {
    await t
        .expect(Selector('.md-toolbar').innerText).contains('Vue.js')
})
