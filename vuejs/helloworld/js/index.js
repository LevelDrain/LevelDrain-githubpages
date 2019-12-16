const vm = new Vue({
    el: '#app',
    data() { //data: function ()
        return {
            message: 'Hello'
        }
    },
    methods: {
        clickLog() {
            console.log('clicked')
        }
    }
})

window.vm = vm