module.exports = {
	networks: {
	testrpc: {
	host: "localhost",
	port: 8545,
	network_id: "*",
	gas: 4700000         
	},
	rinkeby: {
	host: "localhost",
	port: 8545,
	network_id: "*",
	gas: 4700000,
	from: "0xFc0640811528b2d20c528a660AFD3888Fe4543C1"
    }
   }
};
