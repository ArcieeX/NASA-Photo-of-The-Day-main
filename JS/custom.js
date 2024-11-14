console.log("hello")


const apiKey = 'EdGEPjA23shXZT9P0JSY1mODiN1FhwulWRmgPRYx';
const url = 'https://api.nasa.gov/planetary/apod';
const photosWrapper = document.getElementById('photos-wrapper');
const mainBtn = document.getElementById('btn');
const resetBtn = document.getElementById('reset-button');
const datesArray = [];
const hidden = document.getElementById("hidden");
let hideShow = document.querySelector('.show-div');

mainBtn.addEventListener('click', toggleDiv);

function toggleDiv() {
  hidden.classList.toggle('display-none');
};

function getData() {
fetch(`${url}?api_key=${apiKey}&start_date=2024-08-30&end_date=2024-09-03`)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    displayData(data)
                    // resetBtn.style.display = 'block';
                })

            }
            getData()

function displayData(data) {
    console.log(data, "HERE")
    let mediaContent;

    for(item of data) {
        if (item.media_type === 'video') {
            mediaContent = `
                <video width="560" height="315" controls>
                    <source src=${item.url} type="video/mp4">
                    Your browser does not support the video tag.
                </video>`
        } else {
            mediaContent = `<img src="${item.url}" alt="${item.title}">`
        }
    
        const dataHTML = `
        <div class="nasa-item">
            
            <h3>${item.title}</h3>
            <div class="media">${mediaContent}</div>
            <p>${item.explanation}</p>
            <p>Date: ${item.date}</p>
            <p>Photographer: ${item.copyright || 'N/A'}</p>
        </div>
        `
    
        photosWrapper.innerHTML += dataHTML
    }
    mainBtn.addEventListener('click', function (e) {getData()});
    
};

// function getDates() {
//     const today = new Date()

//     const yesterday = new Date(today)
//     yesterday.setDate(today.getDate() - 1)

//     const dayBeforeYes = new Date(today)
//     dayBeforeYes.setDate(today.getDate() - 2)

//     const formatDate = (date) => {
//         return date.toISOString().split('T')[0]
//     }

//     datesArray.push(formatDate(today))
//     datesArray.push(formatDate(yesterday))
//     datesArray.push(formatDate(dayBeforeYes))

//     console.log(datesArray)

//     console.log("Today:", today);
//     console.log("Yesterday:", yesterday);
//     console.log("Day Before Yesterday:", dayBeforeYes);
// }

// getDates()

function resetPage() {
    const resetButton = document.getElementById('reset-button');
    resetButton.addEventListener('click', () => {
        location.reload()
    })
}

// resetPage()
