import Swal from 'sweetalert2'

const defaultConfig = {
    showConfirmButton: false,
    showClass: {
        popup: 'animate__animated animate__zoomIn animate__faster'
        },
    hideClass: {
        popup: 'animate__animated animate__zoomOut animate__faster'
    },
}

export default {
    Cart: {
        successPayment(){

        }
    },
    SingleProduct: {
        quantityReached({onClose}){

            const config = {
                icon: 'info',
                title: 'Se ha alcanzado la cantidad máxima de productos',
                text: 'Se añadirán solo 125,000 unidades al carrito',
                // timer: 2500,
                showConfirmButton: true,
                confirmButtonText: "Lo entiendo",
                willClose(){
                    onClose()
                }
            }

            Object.assign(defaultConfig, config)

            Swal.fire(defaultConfig)
        }
    }
}