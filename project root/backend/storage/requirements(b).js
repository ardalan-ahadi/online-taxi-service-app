// Required
const sqlite3 = require('sqlite3');
const express = require('express');
const fs = require('fs');
const uuid = require('uuid');
const cors = require('cors');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const jwt = require('jsonwebtoken'); 
const requestIp = require('request-ip');
const geoip = require('geoip-lite');
const path = require('path');
const mammoth = require('mammoth');

// Export
module.exports = {
    sqlite3,
    express,
    fs,
    uuid,
    cors,
    bodyParser,
    crypto,
    jwt,
    requestIp,
    geoip,
    path,
    mammoth
};