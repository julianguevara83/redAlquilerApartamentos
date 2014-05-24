var App = {
    init: function(){        
        this.myRootRef = new Firebase('https://incandescent-fire-8371.firebaseio.com/');      
        this.$table = $('#tblTablaContactos > tbody');
    },
    save: function (item) {
        this.myRootRef.child("users").child(item.Id).set(item);       
    },
    render: function(){
        this.myRootRef.on('value', function(snapshot) {
            var usuarios = snapshot.val();
            _.each(usuarios['users'], function(v, i){
                console.log(v.name);
            });
        });
    },
    remove: function(id){
        this.todoItemTable.del({ id: id }).then(this.refreshTodoItems, this.handleError);
    },
    update:function(item){
        this.myRootRef.child("users").child(item.id).update(item);  
    }
};
            
