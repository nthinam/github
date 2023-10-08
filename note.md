#term
https://github.com/nthinam/github.git
pass: Thanhdat2008@
- repo
- các nhánh Branch
- conflict xung đột
#Commands
 - git init
 - git status : ghi nhận thay đổi của dự án
 - git branch -m master 
 - git add : lưu lại thời điểm hiện tại của dự án lưu lại file dự án 
- git add .
lưu laị tất cả các file
- git reset : không lưu file, lấy lại fil cũ
- git commit -m 'start commit'
Ghi chính thức các file và ghi chú thời điểm chỉnh sửa code
- git log
xem lại tất cả các phiên bản đã chỉnh sửa
- git log --oneline
xem các commit trên một dòng
- git checkout 'id'
kiểm tra từng commit, id là các số xuất hiện đầu tiên trên các phiên bản
- git checkout master :    {brand name} 
trở về thời điểm hiện tại, hoặc chuyển đến các nhánh khác thi thay tên branch name
- git branch 
kiểm tra các nhánh của dự án
- git checkout -b {branch name}
tạo thêm một nhánh mới
- git merge {baranch name}
tổng hợp các nhánh lại với nhau
- git branch -d {branch name}
xoa một nhánh
- git push https://github.com/nthinam/github.git
đẩy code lên local github
- git push --set-upstream https://github.com/nthinam/github.git master

