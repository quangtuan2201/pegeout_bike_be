"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ResponseHandler {
    // Phản hồi thành công
    static success(res, message, data = null) {
        return res.status(200).json({
            success: true,
            message,
            data,
        });
    }
    // Phản hồi lỗi chung
    static error(res, message, statusCode = 500, data = null) {
        return res.status(statusCode).json({
            success: false,
            message,
            data,
        });
    }
    // Phản hồi lỗi 403
    static forbidden(res, message = "Không có quyền truy cập.") {
        return this.error(res, message, 403);
    }
    // Phản hồi lỗi 404
    static notFound(res, message = "Không tìm thấy tài nguyên.") {
        return this.error(res, message, 404);
    }
    // Phản hồi lỗi tùy chỉnh khác
    static customError(res, statusCode, message, data = null) {
        return this.error(res, message, statusCode, data);
    }
}
exports.default = ResponseHandler;
