new Vue({
 el: '#vue-app',
 data:{
   name:'Shahadat',
   job: 'Student'
 },
 methods: {
   greet: function(time){
     return 'Good'+" "+ time+" "+this.name;
   }
 }

});
