import 'components/ComponentMaster.css';

function ComponentMaster(){
    return (
        <>
            <h2>Blur Thumbnails</h2>
            <input type="submit" onclick="BlurThumbnails()"/>
            <h1>Title Censorship</h1>
            <input type="submit" onclick="censorTitles()" />
            <h1>channel Censorship</h1>
            <input type="submit" onclick="censorChannels()" />
        </>
    )
}

export default ComponentMaster;