// Based on https://www.geeksforgeeks.org/how-to-switch-the-language-of-the-page-using-javascript/

// Define the invitation in different languages
var invitation_start_en = "<span>Tú Anh & Hải Yến cordially invite</span>";
      invitation_end_en = "<span>to our wedding ceremony and wedding party.</span>";
    invitation_start_vi = "<span>Tú Anh và Hải Yến thân mời</span>";
      invitation_end_vi = "<span>đến dự đám cưới và tiệc cưới của chúng mình.</span>";
      invitation_end_vi_no_pronoun = "<span>đến dự đám cưới và tiệc cưới của ";
    invitation_start_fr = "<span>Tú Anh & Hải Yến sont heureux de inviter</span>";
      invitation_end_fr = "<span>à nos cérémonie et réception de mariage.</span>";

function setInvitation(name_en, name_vi, name_fr, defaultlang, vi_pronoun="") {
  changeLanguage(defaultlang, before_rsvp_init=true);
  document.getElementById("guest_invitation_en").innerHTML = invitation_start_en + name_en + invitation_end_en;
  document.getElementById("guest_invitation_fr").innerHTML = invitation_start_fr + name_fr + invitation_end_fr;
  if (vi_pronoun=="") {
    document.getElementById("guest_invitation_vi").innerHTML = invitation_start_vi + name_vi + invitation_end_vi;
  }
  else {
    document.getElementById("guest_invitation_vi").innerHTML = invitation_start_vi + name_vi + invitation_end_vi_no_pronoun + vi_pronoun + ".</span>";
    }
}

// Check if a hash value exists in the URL
if (window.location.hash) {

// Set the content of the webpage 
// depending on the hash value
if (window.location.hash == "#anh-quang-chi-cuc") {
  setInvitation(
    name_en="Quang and Cúc",
    name_vi="anh Quang và chị Cúc",
    name_fr="Quang et Cúc",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-quang-x15") {
  setInvitation(
    name_en="Quang",
    name_vi="anh Quảng",
    name_fr="Quang",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-trung-chi-nhi") {
  setInvitation(
    name_en="Trung and Nhi",
    name_vi="anh Trung và chị Nhi",
    name_fr="Trung et Nhi",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-hieu-x12") {
  setInvitation(
    name_en="Hieu",
    name_vi="anh Hiếu",
    name_fr="Hieu",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-tu-nga") {
  setInvitation(
    name_en="Tu and Nga",
    name_vi="anh Tú và Nga",
    name_fr="Tu et Nga",
    defaultlang="vi",
    //vi_pronoun=""
  )
}
else if (window.location.hash == "#anh-vinh-chi-huong") {
  setInvitation(
    name_en="Vinh and Huong",
    name_vi="anh Vinh và chị Hường",
    name_fr="Vinh et Huong",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}

else if (window.location.hash == "#anh-binh-minh-x12") {
  setInvitation(
    name_en="Binh Minh",
    name_vi="anh Bình Minh",
    name_fr="Binh Minh",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-bach-x14") {
  setInvitation(
    name_en="Bach",
    name_vi="anh Bách",
    name_fr="Bach",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-tien-x14") {
  setInvitation(
    name_en="Tien",
    name_vi="anh Tiến",
    name_fr="Tien",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-huy-chi-phuong") {
  setInvitation(
    name_en="Huy and Phuong",
    name_vi="anh Huy và chị Phương",
    name_fr="Huy et Phuong",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-phuoc-x14") {
  setInvitation(
    name_en="Phuoc",
    name_vi="anh Phước",
    name_fr="Phuoc",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-toan-x15") {
  setInvitation(
    name_en="Toan",
    name_vi="anh Toàn",
    name_fr="Toan",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-dung-x15") {
  setInvitation(
    name_en="Dung",
    name_vi="anh Dũng",
    name_fr="Dung",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}

else if (window.location.hash == "#binh-x16") {
  setInvitation(
    name_en="Binh",
    name_vi="Bình",
    name_fr="Binh",
    defaultlang="vi",
    //vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#toan-x16") {
  setInvitation(
    name_en="Toan",
    name_vi="Toàn",
    name_fr="Toan",
    defaultlang="vi",
    //vi_pronoun="bọn em"
  )
}

else if (window.location.hash == "#minh-x17") {
  setInvitation(
    name_en="Minh",
    name_vi="Minh",
    name_fr="Minh",
    defaultlang="vi",
    //vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#quyen-x17") {
  setInvitation(
    name_en="Quyen",
    name_vi="Quyên",
    name_fr="Quyen",
    defaultlang="vi",
    //vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#phuong-x17") {
  setInvitation(
    name_en="Phuong",
    name_vi="Phương",
    name_fr="Phuong",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}
else if (window.location.hash == "#thinh-x18") {
  setInvitation(
    name_en="Thinh",
    name_vi="Thịnh",
    name_fr="Thịnh",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}

else if (window.location.hash == "#phuc-x18") {
  setInvitation(
    name_en="Thinh",
    name_vi="Thịnh",
    name_fr="Thinh",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}      
else if (window.location.hash == "#du-x18") {
  setInvitation(
    name_en="Du",
    name_vi="Du",
    name_fr="Du",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}      
else if (window.location.hash == "#duc-x18") {
  setInvitation(
    name_en="Duc",
    name_vi="Đức",
    name_fr="Duc",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}      
else if (window.location.hash == "#quang-anh-x18") {
  setInvitation(
    name_en="Quang Anh",
    name_vi="Quang Anh",
    name_fr="Quang Anh",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}      
else if (window.location.hash == "#hoang-anh-ngoc") {
  setInvitation(
    name_en="Hoang Anh and Ngoc",
    name_vi="Hoàng Anh và Ngọc",
    name_fr="Hoang Anh et Ngoc",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}

else if (window.location.hash == "#viet-x19") {
  setInvitation(
    name_en="Viet",
    name_vi="Việt",
    name_fr="Viet",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}
else if (window.location.hash == "#nay-x20") {
  setInvitation(
    name_en="Nay",
    name_vi="Nay",
    name_fr="Nay",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}
else if (window.location.hash == "#khang-x20") {
  setInvitation(
    name_en="Khang",
    name_vi="Khang",
    name_fr="Khang",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}
}
