const formaterDinero =cantidad => {
    return cantidad.toLocaleString('es-US', { 
        style: 'currency', 
        currency: 'USD' });

    }
export { formaterDinero };