const express = require('express')

module.exports = function(server) {
    //Definir URL base apara todas as rotas
    const router = express.Router()
    server.use('/api', router)

    //Rotas ciclos de pagamento
    const BillingCycle = require('../api/billingCycle/billingCycleService')
    BillingCycle.register(router, '/billingCycles')
}