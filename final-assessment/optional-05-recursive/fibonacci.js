function fibonacci(n) {
    const order = [0]
    if(n === 0) return order
    order.push(1)
    for( let i = 2; i <= n; i++){
        order.push(order[i - 1] + order[i - 2])
    }
    return order
}

// Jangan hapus kode di bawah ini!
export default fibonacci;
