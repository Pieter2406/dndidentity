"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = express_1.default();
app.get('/', (req, res) => {
    res.send('hello dndidentiy guys');
});
app.listen(process.env.PORT || 2406, () => {
    console.log(`server started at ${process.env.OPENSHIFT_NODEJS_IP ||
        'localhost'}:${process.env.OPENSHIFT_NODEJS_PORT || 2406}`);
});
//# sourceMappingURL=server.js.map