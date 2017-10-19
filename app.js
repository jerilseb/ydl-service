const app = require('express')();
const fs = require('fs');
const ytdl = require('ytdl-core');

app.get('/', (req, res) => {
    res.json({message: "Active"});
})

app.get('/download/:id', (req, res) => {
    const video_id = req.params.id;
    if(video_id) {
        console.log(`Downloading video ${video_id}`);
        var filepath = `C:/Users/ASUS/Videos/${video_id}.mp4`;
        var fileStream = fs.createWriteStream(filepath);

        const url = `http://www.youtube.com/watch?v=${video_id}`;
        ytdl(url, { filter: (format) => format.container === 'mp4' })
        .pipe(fileStream);

        res.json({message: "Download started"});
    }
    else {
        res.json({message: "Invalid video id"});        
    }
})

app.listen(8155, () => {
    console.log(`Express server listenting on port 8155`);
});



  