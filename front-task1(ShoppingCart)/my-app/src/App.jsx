// import { useState } from "react"

// export default function App(){
//   const [products,setProducts] = useState([
//     {id:100, title:"Backend", price:39.99, picture: "https://m.media-amazon.com/images/I/91E7mDO44RL._UF894,1000_QL80_.jpg"},
//     {id:101, title:"React", price:39.99, picture: "https://m.media-amazon.com/images/I/61vg+0-1yGL._UF1000,1000_QL80_.jpg"},
//     {id:102, title:"Math", price:22.00, picture: "https://m.media-amazon.com/images/I/81OrIk+OffL._UF1000,1000_QL80_.jpg"},
//     {id:103, title:"Physics", price:4.99, picture: "https://m.media-amazon.com/images/I/81L-c3G66eL.jpg"},
//     {id:104, title:"History", price:28.99, picture: "https://m.media-amazon.com/images/I/91T1BgOOzTL._UF894,1000_QL80_.jpg"},
//     {id:105, title:"Antrology", price:39.99, picture: "https://m.media-amazon.com/images/I/81e3F1bapaL._UF1000,1000_QL80_.jpg"},
//     {id:106, title:"Feminism", price:0.99, picture: "https://m.media-amazon.com/images/I/81jnfM-OUrL._UF1000,1000_QL80_.jpg"},
//     {id:107, title:"Shakespeare", price:10.00, picture: "https://www.gutenberg.org/cache/epub/100/pg100.cover.medium.jpg"},
//     {id:108, title:"Design", price:148.00, picture: "https://m.media-amazon.com/images/I/61N9a2peJaL._UF1000,1000_QL80_.jpg"},
//     {id:109, title:"Biology", price:4.00, picture: "https://www.mheducation.com/cover-images/Webp_400-wide/1264851634.webp"}
//   ])

//   const [basket, setBasket] = useState([])
//   const [sortField, setSortField] = useState(null)

//   const moveToCart = (product) => {
//     const found = basket.find(item => item.id === product.id)
//     if(!found) {
//       setBasket([...basket, {...product, quantity: 1}])
//     } else {
//       found.quantity++;
//       setBasket([...basket]);
//     }
//   }

//   const increaseQuantity = (id) => {
//     setBasket(basket.map(item =>
//       item.id === id ? {...item, quantity: item.quantity + 1} : item
//     ))
//   }

//   const decreaseQuantity = (id) => {
//     setBasket(basket.map(item =>
//       item.id === id && item.quantity > 1
//         ? {...item, quantity: item.quantity - 1}
//         : item
//     ))
//   }

//   const removeItem = (id) => {
//     setBasket(basket.filter(item => item.id !== id))
//   }

//   const sortBy = (field) => {
//     setSortField(field)
//     const sorted = [...basket].sort((a,b) => {
//       if(typeof a[field] === "string"){
//         return a[field].localeCompare(b[field]);
//       } else {
//         return a[field] - b[field];
//       }
//     })
//     setBasket(sorted)
//   }

//   return <div className="container">
//           <h1 className="display-3">Shopping Cart</h1>
//           <div className="row">
//             <div className="col-md-8">
//               <h2>Products </h2>
//               <div className="row">
//                 {
//                   products.map(product => 
//                     <div key={product.id} className="col-md-4 my-2">
//                       <img
//                         src = {product.picture}
//                         style={{width:170,height:200}}
//                         alt={product.title}
//                       />
//                       <p>{product.title}</p>
//                       <p className="text-danger">{product.price} USD</p>
//                       <button onClick={() => moveToCart(product)} className="btn btn-outline-danger">+</button>
//                     </div>
//                   )
//                 }
//               </div>
//             </div>
//             <div className="col-md-4">
//               <h2>Basket</h2>
//               <table className="table table-dark table-bordered">
//                 <thead>
//                   <tr>
//                     <th onClick={() => sortBy("title")} style={{cursor:"pointer"}}>product</th>
//                     <th onClick={() => sortBy("price")} style={{cursor:"pointer"}}>price</th>
//                     <th onClick={() => sortBy("quantity")} style={{cursor:"pointer"}}>quantity</th>
//                     <th onClick={() => sortBy("subtotal")} style={{cursor:"pointer"}}>subtotal</th>
//                     <th>actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {
//                     basket.map(item => {
//                       const subtotal = item.price * item.quantity
//                       return <tr key={item.id}>
//                         <td>{item.title}</td>
//                         <td>{item.price} USD</td>
//                         <td>{item.quantity}</td>
//                         <td>{subtotal} USD</td>
//                         <td>
//                           <button onClick={() => increaseQuantity(item.id)} className="btn btn-outline-success btn-sm">+</button>
//                           <button 
//                             onClick={() => decreaseQuantity(item.id)} 
//                             disabled={item.quantity < 2} 
//                             className="btn btn-outline-warning btn-sm">-</button>
//                           <button onClick={() => removeItem(item.id)} className="btn btn-outline-danger btn-sm">x</button>
//                         </td>
//                       </tr>
//                     })
//                   }
//                 </tbody>
//               </table>
//             </div>
//           </div>
//     </div>
// }

import { useState } from "react"

export default function App() {
  const [products] = useState([
    { id: 100, title: "Backend", price: 39.99, picture: "https://m.media-amazon.com/images/I/91E7mDO44RL._UF894,1000_QL80_.jpg" },
    { id: 101, title: "React", price: 39.99, picture: "https://m.media-amazon.com/images/I/61vg+0-1yGL._UF1000,1000_QL80_.jpg" },
    { id: 102, title: "Math", price: 22.00, picture: "https://m.media-amazon.com/images/I/81OrIk+OffL._UF1000,1000_QL80_.jpg" },
    { id: 103, title: "Physics", price: 4.99, picture: "https://m.media-amazon.com/images/I/81L-c3G66eL.jpg" },
    { id: 104, title: "History", price: 28.99, picture: "https://m.media-amazon.com/images/I/91T1BgOOzTL._UF894,1000_QL80_.jpg" },
    { id: 105, title: "Antrology", price: 39.99, picture: "https://m.media-amazon.com/images/I/81e3F1bapaL._UF1000,1000_QL80_.jpg" },
    { id: 106, title: "Feminism", price: 0.99, picture: "https://m.media-amazon.com/images/I/81jnfM-OUrL._UF1000,1000_QL80_.jpg" },
    { id: 107, title: "Shakespeare", price: 10.00, picture: "https://www.gutenberg.org/cache/epub/100/pg100.cover.medium.jpg" },
    { id: 108, title: "Design", price: 148.00, picture: "https://m.media-amazon.com/images/I/61N9a2peJaL._UF1000,1000_QL80_.jpg" },
    { id: 109, title: "Biology", price: 4.00, picture: "https://www.mheducation.com/cover-images/Webp_400-wide/1264851634.webp" }
  ])

  const [basket, setBasket] = useState([])
  const [sortField, setSortField] = useState(null)

  const moveToCart = (product) => {
    const found = basket.find(item => item.id === product.id)
    if (!found) {
      setBasket([...basket, { ...product, quantity: 1 }])
    } else {
      setBasket(basket.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ))
    }
  }

  const increaseQuantity = (id) => {
    setBasket(basket.map(item =>
      item.id === id ? { ...item, quantity: item.quantity + 1 } : item
    ))
  }

  const decreaseQuantity = (id) => {
    setBasket(basket.map(item =>
      item.id === id && item.quantity > 1
        ? { ...item, quantity: item.quantity - 1 }
        : item
    ))
  }

  const removeItem = (id) => {
    setBasket(basket.filter(item => item.id !== id))
  }

  const sortBy = (field) => {
    setSortField(field)
    const sorted = [...basket].sort((a, b) => {
      if (typeof a[field] === "string") {
        return a[field].localeCompare(b[field]);
      } else {
        return a[field] - b[field];
      }
    })
    setBasket(sorted)
  }

  const total = basket.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="container py-4">
      <h1 className="display-4 text-center mb-5">🛒 Shopping Cart</h1>
      <div className="row">
        {/* Products Section */}
        <div className="col-md-8">
          <h2 className="mb-3">Products</h2>
          <div className="row">
            {
              products.map(product =>
                <div key={product.id} className="col-md-4 mb-4">
                  <div className="card h-100 shadow-sm border-0">
                    <img
                      src={product.picture}
                      className="card-img-top"
                      style={{ height: 220, objectFit: "cover" }}
                      alt={product.title}
                    />
                    <div className="card-body text-center">
                      <h5 className="card-title">{product.title}</h5>
                      <p className="card-text text-danger fw-bold">{product.price} USD</p>
                      <button onClick={() => moveToCart(product)} className="btn btn-outline-primary w-100">
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
        </div>

        {/* Basket Section */}
        <div className="col-md-4">
          <h2 className="mb-3">Basket</h2>
          {basket.length === 0 ? (
            <div className="alert alert-info">Your basket is empty 🛍️</div>
          ) : (
            <>
              <table className="table table-hover align-middle shadow-sm">
                <thead className="table-dark">
                  <tr>
                    <th onClick={() => sortBy("title")} style={{ cursor: "pointer" }}>Product</th>
                    <th onClick={() => sortBy("price")} style={{ cursor: "pointer" }}>Price</th>
                    <th onClick={() => sortBy("quantity")} style={{ cursor: "pointer" }}>Qty</th>
                    <th onClick={() => sortBy("subtotal")} style={{ cursor: "pointer" }}>Subtotal</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    basket.map(item => {
                      const subtotal = item.price * item.quantity
                      return (
                        <tr key={item.id}>
                          <td>{item.title}</td>
                          <td>{item.price} USD</td>
                          <td>{item.quantity}</td>
                          <td>{subtotal.toFixed(2)} USD</td>
                          <td>
                            <button onClick={() => increaseQuantity(item.id)} className="btn btn-sm btn-success me-1">+</button>
                            <button onClick={() => decreaseQuantity(item.id)} disabled={item.quantity < 2} className="btn btn-sm btn-warning me-1">-</button>
                            <button onClick={() => removeItem(item.id)} className="btn btn-sm btn-danger">x</button>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </table>
              <div className="text-end fw-bold fs-5 mt-3">
                Total: <span className="text-success">{total.toFixed(2)} USD</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}
