function solution(new_id) {
    new_id = new_id.toLowerCase();
    const regex2 = /[^\w\d-_.]/g;
    const regex3 = /\.+/g;
    const regex4 =/^\.|\.$/g;
    const regex6 = /\.$/g;
    new_id=new_id.replace(regex2,'').replace(regex3,'.').replace(regex4,'');
   
    if(new_id.length===0){
        new_id='a';
    }else if(new_id.length>15){
        new_id = new_id.slice(0,15);
    }
    new_id = new_id.replace(regex6,'');
    if(new_id.length<3){
        let last = new_id.charAt(new_id.length-1);
        while(new_id.length<3){
            new_id+=last;
        }
    }

    return new_id;
}