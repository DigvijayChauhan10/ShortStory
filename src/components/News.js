import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  const [articles, setArticles] = useState([]);
  const [totalResult, setTotalResult] = useState(0);
  const [page, setPage] = useState(1);

  const fetchAPIData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${props.apiKey}&category=${props.category}&page=1&pageSize=${props.pageSize}`;
    const data = await fetch(url);
    const result = await data.json();
    setArticles(result.articles);
    setTotalResult(result.totalResults);
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${
      props.apiKey
    }&category=${props.category}&page=${page + 1}&pageSize=${props.pageSize}`;
    const data = await fetch(url);
    const result = await data.json();
    setArticles(articles.concat(result.articles));
    setPage(page + 1);
  };

  useEffect(() => {
    fetchAPIData();
    //eslint-disable-next-line
  }, []);

  return (
    <div className="container my-2">
      <h1>Great Stories in Few Words</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResult}
        loader={<Spinner/>}
      >
        <div className="container">
          <div className="row my-4">
            {articles.map((data, id) => {
              return (
                <div className="col-md-4" key={data.url}>
                  <NewsItem key={id} newsData={data} />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </div>
  );
}
