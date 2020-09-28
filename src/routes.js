export default [
    // Insert additional routes here
    { name: 'default', path: '*', component: { name: 'DefaultView', render: h => h('div', 'Default view') }, props: true }
]
