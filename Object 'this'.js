var appl = {
  name: 'Joe',
  age: '43',
  info: function(){ 
    this.name = 'Mendel'
     console.log(this)
   var update = (newname)=>{
      this.name = newname ;
      console.log(this);
    }
    update('Shmerel');
  }
}
var arrayTest = [1,4,'Green', true, {banana: 'yelloew'},[1,2,3]]
appl.info()
console.log(appl)
for(var part in appl){
  console.log(part,':  ', appl[part]);
}