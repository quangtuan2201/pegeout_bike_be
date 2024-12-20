// src/statusCodes.ts
type StatusCode = {
  status: number;
  message: string;
};
// Định nghĩa mã trạng thái và thông điệp cho thành công
export const succRes: Record<string, StatusCode>= {
    DEFAULT: { status: 200, message: "Thành công." },
    DATA_RETRIEVED: { status: 200, message: "Lấy dữ liệu thành công." },
    CREATED: { status: 201, message: "Tạo mới thành công." },
    UPDATED: { status: 200, message: "Cập nhật thành công." },
    DELETED: { status: 200, message: "Xóa thành công." },
    ACCEPTED: {status : 202, message : "Yêu cầu được chấp nhận nhưng chưa xử lý xong."},
    NO_CONTENT : {status : 204, message :"Yêu cầu thành công nhưng không có nội dung trả về."}
  };
  
  // Định nghĩa mã trạng thái và thông điệp cho lỗi
  export const cliErrRes: Record<string, StatusCode>= {
    DEFAULT: { status: 400, message: "Đã xảy ra lỗi." },
    NOT_FOUND: { status: 404, message: "Không tìm thấy tài nguyên." },
    UNAUTHORIZED: { status: 401, message: "Chưa được xác thực." },
    FORBIDDEN: { status: 403, message: "Truy cập bị từ chối." },
    VERIFY : {status: 403, message: "Token không hợp lệ hoặc đã hết hạn" },

  };
  export const srvErrRes: Record<string, StatusCode> = {
    SERVER_ERROR: { status: 500, message: "Lỗi máy chủ." },
    NOT_IMPLEMENTED : {status : 501, message : "Server chưa hỗ trợ chức năng được yêu cầu"},
    BAD_GATEWAY : {
      status : 502,
      message : "Server nhận được phản hồi không hợp lệ từ server khác khi đóng vai trò gateway."
    },
    SEVICE_UNAVAILABLE : {
      status : 503,
      message : "Server tạm thời không sẵn sàng để xử lý yêu cầu."
    },
    GETWAY_TIMEOUT : {
      status : 504,
      message : "Server không nhận được phản hồi kịp thời từ server khác."
    }
       
  }
  
  export const infRes: Record<string, StatusCode>= {
    CONTINUE : {
      status : 100,
      message : "Yêu cầu ban đầu đã được nhận"
    },
    SWITCHING : {
      status : 101,
      message : "Server đồng ý chuyển đổi giao thức theo yêu cầu của client."
    }
  }

export const redirectionRes: Record<string, StatusCode>= {
    MOVED_PERMANENTLY : {
      status : 301 ,
      message : "Tài nguyên được yêu cầu đã được di chuyển vĩnh viễn."
    },
    FOUND : {
      status : 302,
      message : "Tài nguyên tạm thời di chuyển đến URL khác."
    },
    NOT_MODIFIED : {
      status : 304,
      message : "Tài nguyên không thay đổi kể từ lần yêu cầu cuối"
    }
}
