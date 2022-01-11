import React from "react";

export default function NewsItem(props) {

  const {source,author, title, description, url, urlToImage } =props.newsData; 
  return (
      <div className="card my-2">
        <img
          src={urlToImage ? urlToImage: 'https://im.indiatimes.in/content/2021/Aug/photo-1532375810709-75b1da00537c_6114c30423b44.jpg?w=725&h=480'}
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <h5 className="card-title">{source.name?source.name:'Unknown'}</h5>
          <p className="card-text">
            {description}
          </p>
          <p className="card-text">
            {author?author:'Unknown'}
          </p>
          <a href={url} target='_blank' rel="noreferrer" className="btn btn-primary">READ MORE</a>
        </div>
      </div>
  );
}
