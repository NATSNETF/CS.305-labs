let list={
    p:"this is text in the paragraph",
    next:{
        input:"this was typed by the user",
        next:{
            label:"name",
            next:{
                div:null,
                body:null
            }
        }


    }
};
function printnameValu(list){
    let tem=list;
    while(tem){
        console.log(tem.p);
        tem=tem.next;
    }
}
printnameValu(list);


