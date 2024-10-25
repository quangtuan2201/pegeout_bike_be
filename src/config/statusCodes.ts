// src/statusCodes.ts

// Định nghĩa mã trạng thái và thông điệp cho thành công
export const successResponses = {
    DEFAULT: { status: 200, message: "Thành công." },
    DATA_RETRIEVED: { status: 200, message: "Lấy dữ liệu thành công." },
    CREATED: { status: 201, message: "Tạo mới thành công." },
    UPDATED: { status: 200, message: "Cập nhật thành công." },
    DELETED: { status: 200, message: "Xóa thành công." },
  };
  
  // Định nghĩa mã trạng thái và thông điệp cho lỗi
  export const errorResponses = {
    DEFAULT: { status: 400, message: "Đã xảy ra lỗi." },
    NOT_FOUND: { status: 404, message: "Không tìm thấy tài nguyên." },
    UNAUTHORIZED: { status: 401, message: "Chưa được xác thực." },
    FORBIDDEN: { status: 403, message: "Không có quyền truy cập." },
    SERVER_ERROR: { status: 500, message: "Lỗi máy chủ." },
  };
  