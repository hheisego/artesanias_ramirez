export class Pedido {

    constructor(

        public id: string,
        public fechaPedido: string,
        public Cliente: string,
        public Cantidad: number,
        public Descripcion: string,
        public fechaEntrega: string,
        public Anticipo: number,
        public Precio: number,
        public Importe: number,
        public Restante: number,
        public Total: number

    ) { }

}