var command = function (key, query) {
    'use strict';
    this.Google = {
        response_voice : 'Voici les resultats de Google',
        link : 'https://www.google.com/search?q='
    };
    this.Wikipedia = {
        response_voice : 'Voici les resultats Wikipédia',
        link :  'https://fr.wikipedia.org/wiki/'
    };
    this.mail = {
        response_voice : 'Voici vos mail',
        link : 'https://gmail.com/'
    };
    this.Facebook = {
        response_voice : 'Voici vos amis',
        link : 'https://facebook.com/'
    };

    function action(link, query, reponse) {
        window.open(link + query, "_blank");
        responsiveVoice.speak(reponse, voice);
    }

    switch (key) {
        case 'Google':
            action(this.Google.link, query, this.Google.response_voice);
            break;
        case 'Wikipédia':
            action(this.Wikipedia.link, query, this.Wikipedia.response_voice);
            break;
        case 'mail':
            action(this.mail.link, query, this.mail.response_voice);
            break;
        case 'Facebook':
            action(this.Facebook.link, query, this.Facebook.response_voice);
            break;
        default:
            responsiveVoice.speak("Je n'ai pas compris votre demande" , voice);
            return;
    }

};
