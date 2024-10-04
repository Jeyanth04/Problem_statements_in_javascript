function pushZeroesToEnd(packets) {
    let j = 0; 
    
    for (let i = 0; i < packets.length; i++) {
        if (packets[i] != 0) {
            let temp = packets[i];
            packets[i] = packets[j];
            packets[j] = temp;
            j++;
        }
    }
}

const packets = [4,0,3,7,0,2,0,6,8];
console.log("Before:", packets);

pushZeroesToEnd(packets);

console.log("After:", packets);