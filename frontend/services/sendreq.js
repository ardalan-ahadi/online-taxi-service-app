// Import
import axios from 'axios';

// Server
const requrl = 'https://clean-showers-sniff.loca.lt/';

// Export

// fuse
export const req_hstryloc = async (body) => {
    await hndlReq('/tool/updtHloc', body);
};

// button
export const req_signPsngr = async (requestData) => {
    return await hndlReq('/auth/signPsngr', requestData);
};
export const req_signDrvr = async (requestData) => {
    return await hndlReq('/auth/signDrvr', requestData);
};
export const req_logUser = async (loginFormUser) => {
    return await hndlReq('/auth/logUser', loginFormUser);
};
export const req_forgotUser = async (loginFormUser) => {
    return await hndlReq('/auth/forgotUser', loginFormUser);
};
export const req_outUser = async (body) => {
    return await hndlReq('/auth/outUser', body);
};

// frame
export const req_wrdInfo = async () => {
    return await hndlReq('/tool/wrdInfo');
};

// principle
export const req_vldtSession = async (body) => {
    return await hndlReq('/fuse/vldtSession', body);
};

// helper
const hndlReq = async (endpoint, data = null) => {
    try {
        const response = await axios.post(requrl + endpoint, data);
        return response;
    } catch (error) {
        console.error(error);
    }
};