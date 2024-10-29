"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendErrorResponse = exports.sendSuccessResponse = void 0;
// Hàm chung để trả về phản hồi thành công
const sendSuccessResponse = (res, data, message = 'Thành công') => {
    const response = {
        status: 'success',
        data,
        message,
    };
    return res.status(200).json(response);
};
exports.sendSuccessResponse = sendSuccessResponse;
// Hàm chung để trả về phản hồi lỗi
const sendErrorResponse = (res, message, statusCode = 400) => {
    const response = {
        status: 'error',
        message,
    };
    return res.status(statusCode).json(response);
};
exports.sendErrorResponse = sendErrorResponse;
