document.addEventListener("DOMContentLoaded", function () {

    var currentUser = JSON.parse(localStorage.getItem("currentUser"));
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
    var btnDanhGia = document.getElementById("danhgia");
    var inputDanhGia = document.getElementById("input-danhgia");
    var hienThiDanhGia = document.getElementById("danhgia-text");


    if (btnDanhGia) {
        btnDanhGia.addEventListener("click", function () {
            if (!currentUser) {
                alert("Bạn phải đăng nhập để đánh giá!");
                return;
            }

            var noiDung = inputDanhGia.value.trim();
            if (noiDung === "") {
                alert("Vui lòng nhập nội dung đánh giá.");
                return;
            }
            var theMoi = document.createElement("p");
            theMoi.textContent = `${currentUser.name}: ${noiDung}`;
            hienThiDanhGia.appendChild(theMoi);

            inputDanhGia.value = "";
        });
    }
    var btnDatPhong = document.getElementById("btn-toisedat");
    var ngayNhan = document.getElementById("ngaynhan");
    var ngayTra = document.getElementById("ngaytra");
    var selectSoLuong = document.querySelector(".soluong select");
    var tongTienInput = document.getElementById("tongtien");
    var ghiChu = document.getElementById("khung-ghichu");
    function tinhTienPhong() {
        var giaPhong = 0;
        var ngayNhanValue = new Date(ngayNhan.value);
        var ngayTraValue = new Date(ngayTra.value);
        switch (selectSoLuong.value) {
            case "1":
                giaPhong = 3000000;
                break;
            case "2":
                giaPhong = 3500000;
                break;
            case "3":
                giaPhong = 5800000;
                break;
            case "4":
                giaPhong = 6200000;
                break;
        }
        var songay = Math.ceil((ngayTraValue - ngayNhanValue) / (1000 * 60 * 60 * 24));
        if (songay > 0) {
            var tongTien = songay * giaPhong;
            tongTienInput.value = tongTien.toLocaleString("vi-VN") + " VND";
        } else {
            tongTienInput.value = "";
        }

    }

    if (ngayNhan && ngayTra && selectSoLuong) {
        ngayNhan.addEventListener("change", tinhTienPhong);
        ngayTra.addEventListener("change", tinhTienPhong);
        selectSoLuong.addEventListener("change", tinhTienPhong);
    }


    if (btnDatPhong) {
        btnDatPhong.addEventListener("click", function () {
            var currentUser = localStorage.getItem("currentUser");
            if (!currentUser) {
                alert("Bạn phải đăng nhập để đặt phòng!");
                return;
            }
            if (!ngayNhan.value || !ngayTra.value || !selectSoLuong.value || !tongTienInput.value || ghiChu.value.trim() === "") {
                alert("Vui lòng nhập đầy đủ thông tin để đặt phòng!");
                return;
            }
            alert("Đặt phòng thành công!\nTổng tiền: " + tongTienInput.value);
        });
    }
});