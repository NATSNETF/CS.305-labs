let node3 = {
    name: "p",
    value: "This is text in the a paragraph",
    children: null
   };
   let node4 = {
    name: "label",
    value: "Name", 
    children: null 
   };
   let node5 = {
    name: "input",
    value: "this was typed by a user",
    children: null
   };
   let node2 = {
    name: "div",
    value: null,
    children: [node4, node5]
   };
   let node1 = {
    name: "body",
    children: [node2, node3],
    value: null,
   };

   function printnames(node1){ //node1 is the root...we start with it
       console.log(node1.name+":"+node1.value);//
      //we stop calling when we dnt have children
       if(node1.children && node1.children.length>0){ //we check if node1 have a children $length(number of children) of it >0
           node1.children.forEach(function(child){ //if it has greater than 0 then we loop it and print each of them
            console.log("inside forEach ",child);

               printnames(child);
           })
       } 
   }
   printnames(node1);