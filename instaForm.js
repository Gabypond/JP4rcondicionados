const acessToken = 'EAALc5FkNRdEBOwEOZA5aV1mmS13mL3muN1pO50oeRpQL4rZBzmjK6CpiaNFK0ZBv8FN0MDheQSyV1fM91Lkh4iXZA43t9a85vp6Ba106VRUZATU9aTog5jjmJIsLGzKiifXo5KEGf0znUnP4w6QOiYkJhDTYkV3oJcZCCBwGJATdQpiy2aoyaMZAuZCOZBJHJDETxFD7fUMUqgTe2GmqCGaINNkfAIFUZD';

function getInstagramFeed(){
    fetch(`https://graph.instagram.com/v12.0/me/media?fields=id,caption,media_type,media_url,permalink,timestamp&access_token=${acessToken}`)
    .then(response => response.json())
    .then(data => {
        const feedContainer = document.getElementById('#insta-feed');
        data.data.forEach(post => {
            const postLink = document.createElement('a');
            postLink.href = post.permalink;
            postLink.target = '_blank';

            const postImage = document.createElement('img');
            postImage.src = post.media_url;
            postImage.alt = post.caption;

            postLink.appendChild(postImage);
            feedContainer.appendChild(postLink);
        });
    })
        .catch(error => console.error(error));
        console.log(json.stringify(error))    }
    getInstagramFeed()
