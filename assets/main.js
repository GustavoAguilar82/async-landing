const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCy5znSnfMsDwaLlROnZ7Qbg&part=snippet%2Cid&order=date&maxResults=9'

const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '83e3d0a12dmshcbe3bb737683382p1d098bjsn82c212532cd2',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}

//una funcion anonima que se ejecuta a si misma
(async () => {
    try {
      const videos = await fetchData(API);
      let view = `
      ${videos.items.map(video => `
        <div class="group relative" 
          title="Open in a new tab"
          onclick="window.open('https://www.youtube.com/watch?v=${video.id.videoId}', '_blank')">
          
          <div
            class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
            <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
          </div>
          <div class="mt-4 flex justify-between">
            <h3 class="text-sm text-gray-700">
              <span aria-hidden="true" class="absolute inset-0"></span>
              ${video.snippet.title}
            </h3>
          </div>
        </div>
      `).slice(0, 4).join('')}
      `;
      content.innerHTML = view; //content es mi elemento en HTML, lo lleno con View
    } catch (error) {
      console.log(error);
    }
})();

  //https://rapidapi.com/ytdlfree/api/youtube-v31/   enlace de apis


  //Contact form
  const contactForm = document.getElementById("form");
  const buttonMailTo = document.getElementById("mailTo");
  contactForm.addEventListener('submit', submitClicked);

  function submitClicked(event){
    event.preventDefault();
    
    const form = new FormData(this);
    buttonMailTo.setAttribute('href',`mailto:gustavoalonsoaa82@gmail.com?subject=${form.get('subject')}&body=${form.get('message')}`) 
    buttonMailTo.click();

  }