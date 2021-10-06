let animal={
    walk:function(){
        return "animal can walk";
    }
};
let rabit={
    jump:"jump jump",
    __proto__: animal

}
console.log(rabit.walk());
console.log(rabit.jump);
console.log(animal.jump);
