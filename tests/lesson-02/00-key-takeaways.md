# Kiến thức được học trong buổi 2
## 1. Version control system
- Quản lý phiên bản dễ dàng
    - Xem lịch sử thay đổi
    - Quay trở về phiên bản cũ
- Các loại VCS
    - Local: lưu ở máy cá nhân
    - Centralize: Lưu ở 1 máy chủ tập trung
    - Distributed: lưu ở nhiều máy khác nhau
- Phổ biến nhất là Distributed Version Control System (**DVCS**)

## 2. Git
### 2.1 Lịch sử
- Cha đẻ của Git cũng là cha đẻ của hệ điều hành Linux - Linux Torvalds
- Git là DVCS phổ biến nhất thế giới:
    - Dễ dùng, tính năng vượt trội
    - Free
    - Phổ biến

### 2.2 Git & GitHub

| Git | GitHub |
|-----|--------|
| Phần mềm | Dịch vụ web |
| Command line tool | Công cụ có giao diện |
| Đưa file vào Git repository | Nơi đẻ update Git repo lên|

### 2.3 Git (three states)
- Có 3 vùng:
    - Working Directory: Các file mới hoặc file có thay đổi (màu đỏ)
    - Staging Area: Các file đưa vào vùng chuẩn bị commit (màu xanh)
    - Repository: Các phiên bản commit (màu xám)

### 2.4 Git - Cấu hình
- Câu lệnh "git config --global" để mặc định cho toàn bộ các repo trên máy tính
- Câu lệnh "git config" để set riêng trong từng repo (đứng lại terminal của repo đó)

### 2.5 Một số câu lệnh Git
- Git status: Xem trạng thái file
- Git log: Kiểm tra danh sách commit (lịch sử commit)

### 2.6 Git - commit convention
- Dùng convention sau: **(type): (short_desciption)**
    - type: loại commit
        - chore: sửa nhỏ lẻ, xóa file không dùng tới
        - feat: thêm tính năng mới, TCs mới
        - fix: sửa lỗi test trước đó
    - short_description: mô tả ngắn gọn