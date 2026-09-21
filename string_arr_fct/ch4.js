

function Calclenght(str){
    let lnght=0
    for(el in str ){
        lnght++
    }
    return lnght
}
function InverseArry(arr){
    let res=[]
    for (let i = 0; i < Calclenght(arr); i++) {
        let reveschine=''
       for (let j =Calclenght(arr[i])-1; j >=0; j--) {
        reveschine+=arr[i][j]
        
        
       }    
       res.push(reveschine)
    }
    return res

}
console.log(InverseArry(['js','php','rubby']))