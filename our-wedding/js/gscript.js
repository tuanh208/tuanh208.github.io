// Based on https://www.geeksforgeeks.org/how-to-switch-the-language-of-the-page-using-javascript/

// Define the invitation in different languages
var invitation_start_en = "<span>Tú Anh & Hải Yến cordially invite</span>";
      invitation_end_en = "<span>to our wedding ceremony and wedding party.</span>";
    invitation_start_vi = "<span>Tú Anh và Hải Yến thân mời</span>";
      invitation_end_vi = "<span>đến dự đám cưới và tiệc cưới của chúng mình.</span>";
      invitation_end_vi_no_pronoun = "<span>đến dự đám cưới và tiệc cưới của ";
    invitation_start_fr = "<span>Tú Anh & Hải Yến sont heureux d'inviter</span>";
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

else if (window.location.hash == "#anh-binh-minh-x13") {
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
else if (window.location.hash == "#anh-hoang-phd-x") {
  setInvitation(
    name_en="Hoang",
    name_vi="anh Hoàng",
    name_fr="Hoang",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#tram-master-x") {
  setInvitation(
    name_en="Tram",
    name_vi="Trâm",
    name_fr="Tram",
    defaultlang="vi",
    // vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#tuan-anh-phd-x") {
  setInvitation(
    name_en="Tuan Anh",
    name_vi="Tuấn Anh",
    name_fr="Tuan Anh",
    defaultlang="vi",
    // vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#daniel-x16") {
  setInvitation(
    name_en="the family of Daniel Huynh",
    name_vi="gia đình bạn Daniel Huỳnh",
    name_fr="la famille de Daniel Huynh",
    defaultlang="fr",
    // vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-long-chi-nga") {
  setInvitation(
    name_en="Long and Nga",
    name_vi="anh Long chị Nga",
    name_fr="Long et Nga",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#tung-mva") {
  setInvitation(
    name_en="Tung",
    name_vi="Tùng",
    name_fr="Tung",
    defaultlang="vi",
    // vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#nguyen-mva") {
  setInvitation(
    name_en="Nguyen and your girlfriend",
    name_vi="Nguyên và người thương",
    name_fr="Nguyen et ta copine",
    defaultlang="vi",
    // vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#trung-trau") {
  setInvitation(
    name_en="Trung",
    name_vi="Trung Trâu",
    name_fr="Trung",
    defaultlang="vi",
    // vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-linh-chi-anh") {
  setInvitation(
    name_en="Linh and Anh",
    name_vi="anh Linh và chị Ánh",
    name_fr="Linh et Anh",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#chu-quan-co-thuy") {
  setInvitation(
    name_en="Quan and Thuy",
    name_vi="chú Quân và cô Thủy",
    name_fr="Quan et Thuy",
    defaultlang="vi",
    vi_pronoun="bọn cháu"
  )
}
else if (window.location.hash == "#famille-jean-luc-emmanuelle") {
  setInvitation(
    name_en="the family of Jean-Luc and Emmanuelle",
    name_vi="gia đình ông bà Jean-Luc và Emmanuelle",
    name_fr="la famille de Jean-Luc et Emmanuelle",
    defaultlang="fr",
    vi_pronoun="bọn con"
  )
}
else if (window.location.hash == "#phuong-anh") {
  setInvitation(
    name_en="Phuong Anh",
    name_vi="Phương Anh",
    name_fr="Phuong Anh",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}
else if (window.location.hash == "#thao") {
  setInvitation(
    name_en="Thao",
    name_vi="Thảo",
    name_fr="Thao",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}
else if (window.location.hash == "#em-nga") {
  setInvitation(
    name_en="Nga",
    name_vi="Nga",
    name_fr="Nga",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}
else if (window.location.hash == "#chi-vi") {
  setInvitation(
    name_en="Vi",
    name_vi="chị Vi",
    name_fr="Vi",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#chi-lien") {
  setInvitation(
    name_en="Liên",
    name_vi="chị Liên",
    name_fr="Lien",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#binh-dao") {
  setInvitation(
    name_en="Binh",
    name_vi="Bình",
    name_fr="Binh",
    defaultlang="vi",
    //vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#hoang-anh-ngo") {
  setInvitation(
    name_en="Hoang Anh",
    name_vi="Hoàng Anh",
    name_fr="Hoang Anh",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}
else if (window.location.hash == "#josep") {
  setInvitation(
    name_en="Josep",
    name_vi="Josep",
    name_fr="Josep",
    defaultlang="fr",
    //vi_pronoun="anh chi"
  )
}
else if (window.location.hash == "#chi-linh") {
  setInvitation(
    name_en="Linh",
    name_vi="chị Linh",
    name_fr="Linh",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#tung-phan") {
  setInvitation(
    name_en="Tung",
    name_vi="Tùng",
    name_fr="Tung",
    defaultlang="vi",
    //vi_pronoun="anh chi"
  )
}

else if (window.location.hash == "#ha-phuong") {
  setInvitation(
    name_en="Phuong",
    name_vi="Phương",
    name_fr="Phuong",
    defaultlang="vi",
    //vi_pronoun="anh chi"
  )
}

else if (window.location.hash == "#quynh-trang") {
  setInvitation(
    name_en="Quynh Trang",
    name_vi="Quỳnh Trang",
    name_fr="Quynh Trang",
    defaultlang="vi",
    //vi_pronoun="anh chi"
  )
}
  
      
else if (window.location.hash == "#em-quynh") {
  setInvitation(
    name_en="Quynh",
    name_vi="Quỳnh",
    name_fr="Quynh",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}
else if (window.location.hash == "#monsieur-odon-vallet") {
  setInvitation(
    name_en="Mr Odon Vallet",
    name_vi="ngài Odon Vallet",
    name_fr="Monsieur Odon Vallet",
    defaultlang="fr",
    vi_pronoun="bọn cháu"
  )
}

else if (window.location.hash == "#esperan") {
  setInvitation(
    name_en="Espéran Padonou",
    name_vi="Espéran Padonou",
    name_fr="Espéran Padonou",
    defaultlang="fr",
    //vi_pronoun="bọn cháu"
  )
}
else if (window.location.hash == "#famille-didier-pierrette") {
  setInvitation(
    name_en="the family of Didier and Pierrette",
    name_vi="gia đình Didier và Pierrette",
    name_fr="la famille de Didier et Pierrette",
    defaultlang="fr",
    //vi_pronoun="bọn cháu"
  )
}  
else if (window.location.hash == "#chi-cuc") {
  setInvitation(
    name_en="the family of Hung and Cuc",
    name_vi="gia đình anh Hùng chị Cúc",
    name_fr="la famille de Hung and Cuc",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}  
else if (window.location.hash == "#chi-huong") {
  setInvitation(
    name_en="the family of Colin and Huong",
    name_vi="gia đình anh Colin chị Hương",
    name_fr="la famille de Colin et Huong",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}  
else if (window.location.hash == "#chi-khuyen") {
  setInvitation(
    name_en="Khuyen",
    name_vi="chị Khuyên",
    name_fr="Khuyen",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}  
else if (window.location.hash == "#trang-anh-tu") {
  setInvitation(
    name_en="Trang and Tu",
    name_vi="Trang và anh Tú",
    name_fr="Trang et Tu",
    defaultlang="vi",
    // vi_pronoun="bọn em"
  )
}  
else if (window.location.hash == "#yen-ngoc") {
  setInvitation(
    name_en="Ngoc and Yen",
    name_vi="hai em Ngọc và Yến",
    name_fr="Ngoc et Yen",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}  
else if (window.location.hash == "#que") {
  setInvitation(
    name_en="Que",
    name_vi="em Quế",
    name_fr="Que",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}
else if (window.location.hash == "#cau-ninh-mo-nghia") {
  setInvitation(
    name_en="the family of Ninh and Nghia",
    name_vi="cậu Ninh, mợ Nghĩa và các em",
    name_fr="la famille de Ninh et Nghia",
    defaultlang="vi",
    vi_pronoun="bọn cháu"
  )
}  
else if (window.location.hash == "#bac-hai") {
  setInvitation(
    name_en="the family of Hai",
    name_vi="gia đình bác Hải",
    name_fr="la famille de Hai",
    defaultlang="vi",
    vi_pronoun="bọn cháu"
  )
}  
else if (window.location.hash == "#chi-ha") {
  setInvitation(
    name_en="Huy and Ha",
    name_vi="anh Huy chị Hà",
    name_fr="Huy et Ha",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}  
else if (window.location.hash == "#anh-son-x14") {
  setInvitation(
    name_en="Son",
    name_vi="anh Sơn",
    name_fr="Son",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}  
else if (window.location.hash == "#anh-dang-x15") {
  setInvitation(
    name_en="Dang",
    name_vi="anh Đăng",
    name_fr="Dang",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}  
else if (window.location.hash == "#anh-nam-x15") {
  setInvitation(
    name_en="Nam",
    name_vi="anh Nam",
    name_fr="Nam",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}  
else if (window.location.hash == "#tam-de") {
  setInvitation(
    name_en="Tam and Quynh",
    name_vi="Tâm và Quỳnh",
    name_fr="Tam et Quynh",
    defaultlang="vi",
    //vi_pronoun="bọn em"
  )
}  
else if (window.location.hash == "#quan-ens") {
  setInvitation(
    name_en="Quan",
    name_vi="Quân",
    name_fr="Quan",
    defaultlang="vi",
    //vi_pronoun="bọn em"
  )
}  
else if (window.location.hash == "#dao-duc") {
  setInvitation(
    name_en="the family of Duc",
    name_vi="vợ chồng Đức",
    name_fr="la famille de Duc",
    defaultlang="vi",
    //vi_pronoun="bọn em"
  )
}  
else if (window.location.hash == "#anh-minh-hieu") {
  setInvitation(
    name_en="Hieu",
    name_vi="anh Hiếu",
    name_fr="Hieu",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}  
else if (window.location.hash == "#anh-linh") {
  setInvitation(
    name_en="Linh",
    name_vi="anh Linh",
    name_fr="Linh",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}  
else if (window.location.hash == "#quyen-anh") {
  setInvitation(
    name_en="Quyen Anh",
    name_vi="Quyền Anh",
    name_fr="Quyen Anh",
    defaultlang="vi",
    vi_pronoun="anh chị"
  )
}  
else if (window.location.hash == "#thai-huynh") {
  setInvitation(
    name_en="Thai",
    name_vi="Thái",
    name_fr="Thai",
    defaultlang="vi",
    //vi_pronoun="anh chị"
  )
}  
else if (window.location.hash == "#anh-quang-huy") {
  setInvitation(
    name_en="Huy",
    name_vi="anh Huy",
    name_fr="Huy",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}  
else if (window.location.hash == "#anh-lap") {
  setInvitation(
    name_en="Lap",
    name_vi="anh Lập",
    name_fr="Lap",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-kien") {
  setInvitation(
    name_en="Kien",
    name_vi="anh Kiên",
    name_fr="Kien",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#huyen") {
  setInvitation(
    name_en="Huyen",
    name_vi="Huyền",
    name_fr="Huyen",
    defaultlang="vi",
    //vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anh-hiep") {
  setInvitation(
    name_en="the family of Hiep",
    name_vi="gia đình anh Hiệp",
    name_fr="la famille de Hiep",
    defaultlang="vi",
    vi_pronoun="bọn em"
  )
}
else if (window.location.hash == "#anthony-x16") {
  setInvitation(
    name_en="Anthony Guillen",
    name_vi="Anthony Guillen",
    name_fr="Anthony Guillen",
    defaultlang="fr",
    //vi_pronoun="bọn em"
  )
}
      
}
