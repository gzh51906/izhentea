export default {
    state:{
        address: []
    },

    mutations: {
        saveAddress(state, address){
            state.address.push(address)
        },
    
        editAddress(state, payload){
            state.address.splice(payload.idx, 1, payload.data)
        },
    
        removeAddress(state, idx) {
            state.address.splice(idx, 1);
        },
    }
}