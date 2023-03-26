send = () => {
	var email = document.getElementById("email").value;
	var password = document.getElementById("password").value;
	var phonenum = document.getElementById("phonenum").value;
	var res = true;
	var mess = "";
	if (!checkEmail(email)) {
		res = false;
		mess+="email khong hop le\n"
	}
	
	if (!checkPassword(password)) {
		res = false;
		mess+="password khong hop le (ki tu thuong, hoa, so, dac biet >8 ki tu)\n"
	}
	
	if (!checkPhone(phonenum)) {
		res = false;
		mess+="sdt khong hop le ki tu so, 10 so\n"
	}

	alert(res?"hop le!" : mess)
}
checkEmail = (email) => {
	regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return regex.test(email);
}
checkPassword = (password) => {
	thuong = false
	hoa = false
	so = false
	ktdb = false
	dudodai = false
	for (i = 0; i < password.length; i++) {
		if (password[i] >= 'a' && password[i] <= 'z') thuong = true;
		if (password[i] >= 'A' && password[i] <= 'Z') hoa = true;
		if (password[i] >= '0' && password[i] <= '9') so = true;
	}

	regexSp = /[!@#$%^&*(),.?":{}]|<>]/;
	ktdb = regexSp.test(password)
	dudodai = password.length >= 8
	return (thuong && hoa && so && ktdb && dudodai)
}
checkPhone = (phone) => {
	regex = /^\d{10}$/;
	return regex.test(phone);
}