// Based on https://www.geeksforgeeks.org/how-to-switch-the-language-of-the-page-using-javascript/

// Define the invitation in different languages
var invitation_start_en = "<span>Tú Anh & Hải Yến cordially invite</span>";
      invitation_end_en = "<span>to our wedding ceremony and wedding party.</span>";
    invitation_start_vi = "<span>Tú Anh và Hải Yến thân mời</span>";
      invitation_end_vi = "<span>đến dự đám cưới và tiệc cưới của chúng mình.</span>";
    invitation_start_fr = "<span>Tú Anh & Hải Yến sont heureux de inviter</span>";
      invitation_end_fr = "<span>à nos cérémonie et réception de mariage.</span>";

// Check if a hash value exists in the URL
if (window.location.hash) {

// Set the content of the webpage 
// depending on the hash value
if (window.location.hash == "#anh-quang-x13") {
    // changeLanguage('en')
    document.getElementById("guest_invitation_en").innerHTML = invitation_start_en + " Quang and Cúc " + invitation_end_en;
    document.getElementById("guest_invitation_vi").innerHTML = invitation_start_vi + " anh Quang và chị Cúc " + invitation_end_vi;
    document.getElementById("guest_invitation_fr").innerHTML = invitation_start_fr + " Quang et Cúc " + invitation_end_fr;
}
else if (window.location.hash == "#vi") {
    language_dict = language_vi
    document.body.className='vi'
}
else if (window.location.hash == "#fr") {
    language_dict = language_fr
    document.body.className='fr'
}
}