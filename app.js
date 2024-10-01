let m=2;
let n=4
if (m>n){
    console.log(0);
}
else if(m==n){
    console.log(m*m*m)
}
else{
    let sum=0
    for(let i=m;i<=n;i++){
        sum+=(i*i*i)
    }
    console.log(sum)
}