const ModbusRTU = require("modbus-serial");
const client = new ModbusRTU();

const ip = process.env.IP_PLC || "172.172.1.250";
const port = process.env.PORT_PLC || 502;
const address = 10;
const unitId = 1;

async function readHoldingRegister() { //dengan asumsi mengambil data, kalo mau control baru menggunakan coil.
    try {
        await client.connectTCP(ip, { port: port });
        client.setID(unitId);
        const data = await client.readHoldingRegisters(address, 1);
        console.log("Data from holding register:", data.data);
    } catch (error) {
        console.error("Error:", error);
    }
}

readHoldingRegister();