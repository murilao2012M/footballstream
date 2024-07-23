// Verifica se o HLS.js é suportado pelo navegador
if (Hls.isSupported()) {
    var video = document.getElementById('video');
    var videoContainer = document.getElementById('video-container');
  
    function playStream(url) {
        // Mostra o container do vídeo
        videoContainer.style.display = 'block';
      
        // Cria uma nova instância do Hls.js
        var hls = new Hls();
      
        // Carrega o stream no Hls.js
        hls.loadSource(url);
      
        // Liga o Hls.js ao elemento de vídeo
        hls.attachMedia(video);
        hls.on(Hls.Events.MANIFEST_PARSED, function() {
            video.play();
        });
      
        // Adiciona um handler para erros
        hls.on(Hls.Events.ERROR, function(event, data) {
            if (data.fatal) {
                switch(data.fatal) {
                    case Hls.ErrorTypes.NETWORK_ERROR:
                        console.error('Network error.');
                        break;
                    case Hls.ErrorTypes.MEDIA_ERROR:
                        console.error('Media error.');
                        break;
                    case Hls.ErrorTypes.OTHER_ERROR:
                        console.error('Other error.');
                        break;
                }
            }
        });
    }
} else {
    console.error('HLS.js não é suportado neste navegador.');
}