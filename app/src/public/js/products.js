console.log("OK")

const addToCart = async (_id, pid) => {
    const res = await fetch(`/api/put/cart/${_id}/products/${pid}`, {method: 'POST'});
    //const json = await res.json();
    alert(`Product added to cart`);
}