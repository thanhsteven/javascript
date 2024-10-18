# Điều hướng đến thư mục dự án

cd C:\Users\YourName\Documents\Projects\my-project
pwd -> kiểm tra lại thư mục đang làm việc

# Kiểm tra remote

git remote -v

# Thêm hoặc sửa remote nếu cần

git remote add origin https://github.com/username/my-project.git

# hoặc

git remote set-url origin https://github.com/username/my-project.git

# Kiểm tra nhánh và trạng thái

git branch
git status

# Commit các thay đổi cục bộ (nếu có)

git add .
git commit -m "Lời nhắn commit của bạn"

# Hoặc lưu trữ các thay đổi cục bộ

git stash

# Kéo các thay đổi mới nhất từ remote

git pull origin main

# Giải quyết xung đột (nếu có)

# Sau khi chỉnh sửa file xung đột

git add tên-file
git commit -m "Giải quyết xung đột"

# Áp dụng lại stash (nếu đã stash trước đó)

git stash pop
