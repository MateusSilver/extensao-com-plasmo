import 'components/master/ComponentMaster.css';
import BlurThumbnails from 'src/scripts/blurThumbnails.js';

function ComponentMaster(){
    return (
        <>
            <h2>Blur Thumbnails</h2>
            <button type="submit" onClick="BlurThumbnails()">Go</button>
            <h1>Title Censorship</h1>
            <input type="submit" onClick='BlurTitleVideos()' value="Go"/>
            <h1>channel Censorship</h1>
            <input type="submit" onClick="blurChannelName()" value="Go"/>
        </>
    )
}

export default ComponentMaster;