(() => {
    //create a component first

    const UserComponent = {
        props: ['name', 'role'],

        created: function () {

            console.log("I'm aliiiive");
            
        },

        methods: {

            logFromChild() {
                console.log("logged from the component");
            },

            passEvent(){

                //does whatever is assigned in app to shoutup, which is in this case calledOnParent
                this.$emit('shoutup');
            }
        },

        // template is a reference to an id in the html 
        template: "#userstemplate"


    }

    const vm = new Vue({
        el: "#app",

        data: {

            testmessage: "sup"
        },

        methods: {

            calledOnParent() {

                console.log("This method lives in the main vm and was called from a component");
            }
        },

        components: {

            'activeusers' : UserComponent
        }

    })

    // then your vue instance

})();