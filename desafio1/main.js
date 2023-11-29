class productManager {
    constructor(){
        this.products = []
    }

    static id = 0;

    addProduct(title, description, price, thumbnail, code, stock){
        for (let i = 0; i < this.products.length; i++){
            if(this.products[i].code === code){
                console.log('El codigo esta repetido');
                break;
            }
        }
        
        const newProduct = {
            title, description, price, thumbnail, code, stock,
        }

        if(!Object.values(newProduct).includes(undefined)){
            productManager.id++
            this.products.push({...newProduct, id:productManager.id})
        } else {
            console.log ("Rellenar todos los campos")
        }
    }

    getProduct(){
        return this.products;
    }

    exist(id){
        return this.products.find((producto) => producto.id === id);
    }

    getProductById(id){
        !this.exist(id) ? console.log("Not Found") : console.log (this.exist(id))
    }
}

const productos = new productManager();

//Llamada a array vacio
console.log (productos.getProduct());

//Agregación de productos
productos.addProduct('remera', 'remera de Racing', 25000, 'imagen1', '1', '50');
productos.addProduct('remera2', 'remera de Racing2', 35000, 'imagen2', '2',);

//Llamada a array con el producto agregado
console.log (productos.getProduct());

//Validación de CODE repetido
productos.addProduct('remera3', 'remera de Racing3', 15000, 'imagen3', '2', '40');

//Busqueda de producto mediante ID
productos.getProductById(1);

//Busqueda de ID inexistente
productos.getProductById(4);