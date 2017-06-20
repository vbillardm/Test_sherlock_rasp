$(document).ready(function() {  //config languqe

        $('.cls-1').on('mouseover',function(){
            $('.cls-1').attr('fill','#888');
        });
        $('.cls-1').on('mouseleave',function(){
            $('.cls-1').attr('fill','#333');
        });

// Test si le navigateur est compatible avec Web Speech API
    if ('webkitSpeechRecognition' in window) {

        var recognition = new webkitSpeechRecognition();
        recognition.lang = "fr-FR";
        var text = '';
        recognition.continuous = false;
        recognition.interimResults = true;
  $('#result').text();
        // Début enregistrement vocal
        $('#background').click(function(){
            recognition.start();
            $('#result').text();
        });

        // Récuperation des mots
        recognition.onresult = function (event) {
            $('#result').text('');
            for (var i = event.resultIndex; i < event.results.length; ++i) {
                if (event.results[i].isFinal) {

                    recognition.stop();
                    var transcript = event.results[i][0].transcript;

                    // Majuscule à chaque mots (recherche wikipédia)
                    var words = transcript.split(' ');
                    for(var j = 1; j < words.length ; ++j){
                        words[j] = words[j].charAt(0).toUpperCase() + words[j].substring(1).toLowerCase();
                    }

                    // Création de la commande
                    var cmd = new command(words[0], transcript.replace(words[0], ''));

                    $('#result').text(transcript);
                    console.log(cmd,$('#result').text(transcript));
                } else {
                    $('#result').text($('#result').text() + event.results[i][0].transcript);
                }
            }
        };

        // Efface la saisie
        recognition.onend = function(){
            window.setTimeout(function(){
                $('#result').text('');
            }, 2000);
        };
    }
});
