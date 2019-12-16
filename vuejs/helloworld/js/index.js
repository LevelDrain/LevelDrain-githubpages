const vm = new Vue({
    el: '#app',
    data() { //data: function ()
        return {
            message: 'Hello'
        }
    },
    methods: {
        clickLog(event) {
            console.log(this.message)
        }
    }
})

window.vm = vm