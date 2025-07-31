let answer=false;
let dis=document.getElementById("display");
let exp="";
function changedisplay(char)
{
    if(answer)
    {
        removedata();
        answer=false;
    
    }
    exp=dis.value+char;
    dis.value=exp;


}
function operate()
{
    if(dis.value.toString().includes("="))
    {
        let a=dis.value.substring(1);
        removedata();
        exp=a;
        dis.value=a;
        answer=false;
    }
    else{
 
       try
       {
        
            
            if(exp!="")
            {
                let y=eval(exp);
                dis.value="="+y;
            }
     
            
        
       }
    catch(error)
    {
        
        dis.value="Error";


    }
    answer=true;
    }
    
}
function removedata()
{
    exp="";
    dis.value=exp;

}
