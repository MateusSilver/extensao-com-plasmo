chrome.action.onClicked.addListener(async (tab) => {
    const [ page ] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
    });
})

function BlurTitleVideos(){
    chrome.scripting.executeScript({
        target: {
            tabID: page.id,
        },
        function: blurTitle,
    })
}

const blurTitle = () => {
    const titles = document.body.querySelectorAll("#video-title");
    titles.forEach((title) => title.innerHTML = '**************');
}

export default BlurTitleVideos;