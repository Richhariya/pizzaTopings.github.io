const manageOrder = () => {
    let orderID = document.getElementById('order-id-input').value
    document.getElementById('order-no-display').innerText = `Status for order no. : ${orderID}`
    document.getElementById('order-no-display').style.display = 'block'

    document.getElementsByClassName('order-status-block')[0].classList.replace('btn-light','btn-success')
    
    document.getElementById('order-id-input').value = ''

    // console.log('Order Placed')
   setTimeout(() =>{
    console.log("chef Received the order and started preparing")
    document.getElementsByClassName('order-status-block')[1].classList.replace('btn-light','btn-success')
    setTimeout(() =>{
      console.log("Pizza Sauce Added")
      document.getElementsByClassName('order-status-block')[2].classList.replace('btn-light','btn-success')
      setTimeout(() =>{
      console.log("First layer of cheeze added")
      document.getElementsByClassName('order-status-block')[3].classList.replace('btn-light','btn-success')
      setTimeout(() =>{
      console.log("Toppings Added")
      document.getElementsByClassName('order-status-block')[4].classList.replace('btn-light','btn-success')
      setTimeout(() =>{
      console.log("Second layer of cheeze added")
      document.getElementsByClassName('order-status-block')[5].classList.replace('btn-light','btn-success')
      setTimeout(() =>{
      console.log("Pizza Baked!")
      document.getElementsByClassName('order-status-block')[6].classList.replace('btn-light','btn-success')
      setTimeout(() =>{
      console.log("Oregano Added And Packed")
      document.getElementsByClassName('order-status-block')[7].classList.replace('btn-light','btn-success')
      setTimeout(() =>{
      console.log("Package Received at counter")
      document.getElementsByClassName('order-status-block')[8].classList.replace('btn-light','btn-success')
      setTimeout(() =>{
        console.log("Handed over the zomato guy")
        document.getElementsByClassName('order-status-block')[9].classList.replace('btn-light','btn-success')
       
        
         document.getElementById("head-tag-1").style.display = 'block' 
         document.getElementById("container").style.display = 'none'
        
      }, 1000)
      
    }, 5000)
      
    }, 8000)
      
    }, 15000)
     
    }, 5000)
      
    }, 12000)
      
      }, 5000)
    }, 10000)
  }, 2000)
   
}
