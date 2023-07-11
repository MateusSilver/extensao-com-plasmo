import 'components/ComponentMaster.css';

function ComponentMaster(){
    return (
        <>
            <h2>Blur Thumbnails</h2>
            <button type="submit" onClick="BlurThumbnails()">Go</button>
            <h1>Title Censorship</h1>
            <input type="submit" onClick='censorTitles()' />
            <h1>channel Censorship</h1>
            <input type="submit" onClick="censorChannels()" />
        </>
    )
}

export default ComponentMaster;