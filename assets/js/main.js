Vue.component('todo-item', {
    props: ['todo'],
    data: function () {
        return {
            cursor: 'pointer',
            line: false
        }
    },
    template: `<li ><p v-bind:style="{ cursor: cursor, textDecoration: line}"  @click="line='line-through'">{{ todo.text }}</p><button @click="$emit('delete')">delete</button></li>`
});

let app = new Vue({
    el: '#app',
    data: {
        id: 0,
        name: null,
        input: null,
        order: null,
        orderList: []
    },
    methods: {
        inputName() {
            if (this.input === null) {
                this.orderList = [];
                this.name = null;
                return false;
            }
            this.name = this.input + "'s order";
            this.input = null
        },

        addOrder: function () {
            if (this.order === null) {
                return false;
            }

            this.orderList.push({id: this.id, text: this.order});
            this.id += 1;
            this.order = null;

        },

        deleteOrder: function (id) {
            this.orderList.splice(this.orderList.findIndex(value => {
                if (value.id == id) {
                    return value;
                }
            }), 1);

        }
    }
});



