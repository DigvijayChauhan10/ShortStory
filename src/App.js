import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
    const apiKey = //Enter your API key 

        const pageSize = 6;

    return ( <
            BrowserRouter >
            <
            Navbar / >
            <
            Routes >
            <
            Route exact path = "/"
            element = { < News key = "general"
                category = "general"
                apiKey = { apiKey }
                pageSize = { pageSize }
                />}/ >
                <
                Route exact path = "business"
                element = { < News key = "business"
                    category = "business"
                    apiKey = { apiKey }
                    pageSize = { pageSize }
                    />}/ >
                    <
                    Route exact path = "entertainment"
                    element = { < News key = "entertainment"
                        category = "entertainment"
                        apiKey = { apiKey }
                        pageSize = { pageSize }
                        />}/ >
                        <
                        Route exact path = "health"
                        element = { < News key = "health"
                            category = "health"
                            apiKey = { apiKey }
                            pageSize = { pageSize }
                            />}/ >
                            <
                            Route exact path = "science"
                            element = { < News key = "science"
                                category = "science"
                                apiKey = { apiKey }
                                pageSize = { pageSize }
                                />}/ >
                                <
                                Route exact path = "sports"
                                element = { < News key = "sports"
                                    category = "sports"
                                    apiKey = { apiKey }
                                    pageSize = { pageSize }
                                    />}/ >
                                    <
                                    Route exact path = "technology"
                                    element = { < News key = "technology"
                                        category = "technology"
                                        apiKey = { apiKey }
                                        pageSize = { pageSize }
                                        />}/ >
                                        <
                                        /Routes> <
                                        /BrowserRouter>
                                    );
                                }

                                export default App;