// =======================================LOGIN BY BUTTON===========================================

function login() {
    let username = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (username === 'admin' && password === '1234') {
        window.location.href = "Admin/admin.html"
    }

    else if (username === 'cashier' && password === '1234') {
        window.location.href = 'app/cashier/dashboard.html';
    }
}

// ======================================= LOGIN BY ENTER KEY ===========================================

document.getElementById("txtpassword").addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    login();
  }
});