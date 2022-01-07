import "./styles.css";
import axios from "axios";

axios
  .get("https://my-json-server.typicode.com/modanisatech/bootcamp-db/products")
  .then((response) => {
    // Firstly, log response to the console,
    // inspect the response and see that it has data field

    // Assign data field of the response to
    // products variable below by destructuring
    // You can use alias
    console.log(response);
    const products = response.data;
    
    products.forEach(element => {
      console.log(element.name);
    });
    let filterObject = []
    let filter = products.filter(x => x.name.includes('Şal'));
    console.log(filter);

    filter.forEach(element => { 
    filterObject.push(
      {
        name:element.name,
        image:element.image
      }
    )
   });

    console.log(filterObject);

    const mappedProducts = filterObject;
 
    mappedProducts.forEach(element=>{
        let div = document.createElement("div");
        div.className = "post";
        let postImage = document.createElement("div");
        postImage.className = "post-image";
        let img = document.createElement("img");
        img.src = element.image;
        let text = document.createElement("div");
        text.className = "post-text";
        text.innerHTML = element.name;

        postImage.appendChild(img);
        div.appendChild(postImage);
        div.appendChild(text);
        document.getElementsByClassName("all-post")[0].appendChild(div);
    })
  });
