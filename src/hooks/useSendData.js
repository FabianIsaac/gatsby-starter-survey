// import Swal from 'sweetalert2'

import { AUTHORIZATION, SERVER_URL } from "../environment";
import useGetFormValues from "./useGetFormValues";
import useValidateFormData from "./useValidateFormData";

const useSendData = () => {

    const { getFormValues } = useGetFormValues();
    const { validateFormData } = useValidateFormData();

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const values = getFormValues();

        try {

            validateFormData(values);


            // enviaremos los datos al servidor
            fetch(`${SERVER_URL}/survey`, {
                method: 'get',
                // body: JSON.stringify(values),
                headers: {
                    'Authorization': `Bearer ${AUTHORIZATION}.`,
                    'Content-type': 'application/json; charset=UTF-8'
                },
            }).then((response) => {
                
                if (response.status === 200) {

                    // window.location.href = '/ok';

                } else {
                    // Swal.fire({
                    //     icon: 'error',
                    //     title: 'Oops...',
                    //     text: 'Algo salió mal, intenta nuevamente'
                    // });
                }
            }
            ).catch((error) => {
                // Swal.fire({
                //     icon: 'error',
                //     title: 'Oops...',
                //     text: `Error inesperado: ${error}`
                // });
                
            });

        } catch (error) {
            // Swal.fire({
            //     icon: 'error',
            //     title: 'Oops...',
            //     text: error.message
            // });
        }
    }

    return {
        handleSubmit
    }
}

export default useSendData