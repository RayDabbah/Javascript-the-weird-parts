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

appl.info()
console.log(appl)