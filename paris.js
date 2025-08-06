document.addEventListener("DOMContentLoaded", function () {
    const btnDanhGia = document.getElementById("danhgia");
    const inputDanhGia = document.getElementById("input-danhgia");
    const hienThiDanhGia = document.getElementById("danhgia-text");

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (btnDanhGia) {
        btnDanhGia.addEventListener("click", function () {
            if (!currentUser) {
                alert("Bạn phải đăng nhập để đánh giá!");
                return;
            }

            const noiDung = inputDanhGia.value.trim();
            if (noiDung === "") {
                alert("Vui lòng nhập nội dung đánh giá.");
                return;
            }

            // Thêm đánh giá mới vào phần hiển thị
            const theMoi = document.createElement("p");
            theMoi.textContent = `${currentUser.name}: ${noiDung}`;
            hienThiDanhGia.appendChild(theMoi);

            // Xoá input
            inputDanhGia.value = "";
        });
    }
});