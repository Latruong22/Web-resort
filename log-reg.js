document.addEventListener("DOMContentLoaded", function () {
    const currentPage = window.location.pathname;
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    // đăng ký
    if (currentPage.includes("dangky.html")) {
        const btnDangKy = document.getElementById("log");
        btnDangKy.addEventListener("click", function () {
            const name = document.getElementById("name").value;
            const username = document.getElementById("ID").value;
            const password = document.getElementById("pass").value;
            const email = document.getElementById("mail").value;

            if (!name || !username || !password || !email) {
                alert("Vui lòng điền đầy đủ thông tin!");
                return;
            }

            const user = {
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
        const btnDangNhap = document.getElementById("log");
        btnDangNhap.addEventListener("click", function () {
            const username = document.getElementById("ID").value;
            const password = document.getElementById("pass").value;

            const storedUser = localStorage.getItem(username);
            if (!storedUser) {
                alert("Tài khoản không tồn tại!");
                return;
            }

            const user = JSON.parse(storedUser);
            if (user.password === password) {
                alert("Đăng nhập thành công!");
                localStorage.setItem("currentUser", JSON.stringify(user));
                window.location.href = "home.html";
            } else {
                alert("Sai mật khẩu!");
            }
        });
    }

    const loginBtn = document.getElementById("dangnhap");
    const userDisplay = document.getElementById("username-display");

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