// Based on https://www.geeksforgeeks.org/how-to-switch-the-language-of-the-page-using-javascript/
// and https://stackoverflow.com/questions/50961924/how-can-i-translate-html-input-placeholders-dynamically-using-jquery (for dynamic solution)

// Create a function to change
// the hash value of the page
function changeLanguage(lang, before_rsvp_init=false) {
    // location.hash = lang;
    // location.reload();
    document.body.className=lang;
    if (lang == "en") {
        language_dict = language_en
    }
    else if (lang == "vi") {
        language_dict = language_vi
    }
    else if (lang == "fr") {
        language_dict = language_fr
    }
    $("[data-translate]").each(function(){
        if($(this).is( "input" ) || $(this).is( "textarea" )){
           $(this).attr('placeholder', language_dict[$(this).data("translate")])
        } else{
            $(this).text(language_dict[$(this).data("translate")])
        }
        // window.alert($(this))
     })
    if (!before_rsvp_init) {
        changeMessageLanguage(language_dict)
    }
    // window.alert($("#rsvp-form").errors)
    }

function changeMessageLanguage(lang_dict) {
    // Change the message error
    // see here: https://stackoverflow.com/questions/18386927/jquery-validate-variable-error-message
    $('input[name="name"]').rules('add', {
        // required: true,
        // minlength: 2,
        messages: {
            required: lang_dict['name_rsvp_error'],
            minlength: lang_dict['name_minlength_rsvp_error'],
        }
    });
    $('input[name="email"]').rules('add', {
        // required: true,
        // email: true,
        messages: {
            required: lang_dict['email_rsvp_error'],
            email: lang_dict['email_format_rsvp_error'],
        }
    });
    $('select[name="guest"]').rules('add', {
        // required: true,
        messages: {
            required: lang_dict['guest_rsvp_error']
        }
    });
    $('select[name="events"]').rules('add', {
        // required: true,
        messages: {
            required: lang_dict['events_rsvp_error']
        }
    });
    $('select[name="sendemail"]').rules('add', {
        // required: true,
        messages: {
            required: lang_dict['sendemail_rsvp_error']
        }
    });
}



// Define the language reload anchors and set default language
// var language_dict = language_vi;
// document.body.className='vi'
changeLanguage('en', before_rsvp_init=true)

// Check if a hash value exists in the URL
if (window.location.hash) {

// Set the content of the webpage 
// depending on the hash value
if (window.location.hash == "#en") {
    changeLanguage('en', before_rsvp_init=true)
    // language_dict = language_en
    // document.body.className='en'
    // window.alert(language_dict.description_groom)
}
else if (window.location.hash == "#vi") {
    changeLanguage('vi', before_rsvp_init=true)

    // language_dict = language_vi
    // document.body.className='vi'
    // window.alert(language_dict.description_groom)
}
else if (window.location.hash == "#fr") {
    changeLanguage('fr', before_rsvp_init=true)
    // language_dict = language_fr
    // document.body.className='fr'
    // window.alert(language_dict.description_groom)
}
}