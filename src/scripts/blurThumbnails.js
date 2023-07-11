chrome.action.onClicked.addListener(async (tab) => {
    const [ page ] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
    });
})

function BlurThumbnails(){
    chrome.scripting.executeScript({
        target: {
            tabID: page.id,
        },
        function: blur,
    })
}

const blur = () => {
    const thumbs = document.body.querySelectorAll(".yt-core-image");
    thumbs.forEach((image) => image.src = 'https://th.bing.com/th/id/OIP.C7-hR4EXHUKWH_TOJ_K0kgHaEK?pid=ImgDet&rs=1');
}

export default BlurThumbnails;