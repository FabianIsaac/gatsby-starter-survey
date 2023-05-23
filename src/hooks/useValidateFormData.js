const useValidateFormData = () => {
	
    const validateFormData = (formData) => {
        const { name, email, password, confirmPassword } = formData;
        const errors = {};

        if (!name) {
            errors.name = "El nombre es obligatorio";
        }

        if (!email) {
            errors.email = "El email es obligatorio";
        }
        
        if (!password) {
            errors.password = "La contraseña es obligatoria";
        }


        if (!confirmPassword) {
            errors.confirmPassword = "La confirmación de la contraseña es obligatoria";
        }


        if (password !== confirmPassword) {
            errors.confirmPassword = "Las contraseñas no coinciden";
        }

        return errors;
    };

    return {
        validateFormData,
    };
};
    


export default useValidateFormData;
