document.addEventListener("DOMContentLoaded", function () {
    var currentPage = window.location.pathname;
    var currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // đăng ký
    if (currentPage.includes("dangky.html")) {
        var btnDangKy = document.getElementById("log");
        btnDangKy.addEventListener("click", function () {
            var name = document.getElementById("name").value;
            var username = document.getElementById("ID").value;
            var password = document.getElementById("pass").value;
            var email = document.getElementById("mail").value;

            if (!name || !username || !password || !email) {
                alert("Vui lòng điền đầy đủ thông tin!");
                return;
            }

            var user = {
                name: name,
                username: username,
                password: password,
                email: email,
            };

            localStorage.setItem(username, JSON.stringify(user));
            alert("Đăng ký thành công!");
            window.location.href = "dangnhap.html";
        });
    }

    // đăng nhập
    if (currentPage.includes("dangnhap.html")) {
        var btnDangNhap = document.getElementById("log");
        btnDangNhap.addEventListener("click", function () {
            var username = document.getElementById("ID").value;
            var password = document.getElementById("pass").value;

            var storedUser = localStorage.getItem(username);
            if (!storedUser) {
                alert("Tài khoản không tồn tại!");
                return;
            }

            var user = JSON.parse(storedUser);
            if (user.password === password) {
                alert("Đăng nhập thành công!");
                localStorage.setItem("currentUser", JSON.stringify(user));
                window.location.href = "index.html";
            } else {
                alert("Sai mật khẩu!");
            }
        });
    }

    var loginBtn = document.getElementById("dangnhap");
    var userDisplay = document.getElementById("username-display");

    if (currentUser) {
        if (userDisplay) {
            userDisplay.textContent = `Xin chào, ${currentUser.name}!`;
        }

        if (loginBtn) {
            loginBtn.textContent = "Đăng xuất";
            loginBtn.addEventListener("click", function () {
                localStorage.removeItem("currentUser");
                alert("Đã đăng xuất!");
                location.reload();
            });
        }
    } else {
        if (loginBtn) {
            loginBtn.textContent = "Đăng nhập";
            loginBtn.addEventListener("click", function () {
                window.location.href = "dangnhap.html";
            });
        }
    }
});