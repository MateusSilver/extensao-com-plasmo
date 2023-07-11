chrome.action.onClicked.addListener(async (tab) => {
    const [ page ] = await chrome.tabs.query({
        active: true,
        currentWindow: true,
    });
})

function blurChannelName(){
    chrome.scripting.executeScript({
        target: {
            tabID: page.id,
        },
        function: blurNames,
    })
}

const blurNames = () => {
    const ChannelNames = document.body.querySelectorAll(".ytd-channel-name");
    ChannelNames.forEach((name) => name.innerHTML = '**************');
}

export default blurChannelName;