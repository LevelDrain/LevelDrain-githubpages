new Vue({
    el: '#app',
    vuetify: new Vuetify(),

    // onload では不具合が出たので Vue インスタンス生成時に関数呼び出し
    created() {
        this.fetchItems();
    },
    methods: {
        onclick(selected) {
            this.selected = selected;
        },
        // firebase から情報を取得し、データ更新（Read）
        fetchItems() {
            firebase.firestore().collection(`sentences`).get().then(snapshot => {
                snapshot.forEach(doc => {
                    //console.log(doc.id, '=>', doc.data());
                    this.messages.push({
                        time: doc.data().time,
                        message: doc.data().sentence
                    });
                })
            })
        },
        // 書き込み（Create）★管理者用ページのみ
        addItems() {
            // TODO:ES6構文について引数(time, message)と({time, message})との違いが分からない

            firebase.firestore().collection(`sentences`).add({
                time: this.stored.time,
                sentence: this.stored.message
            }).then(doc => {
                console.log(doc.id + 'に書き込みました');
            })
        }
    },
    data() {
        return {
            selected: 'メッセージを選択',
            headers: [
                { text: "日時", value: "time" },
                { text: "メッセージ", value: "message" }
            ],
            messages: [],
            // ★管理者用ページのみ
            stored: []
        }
    }
})