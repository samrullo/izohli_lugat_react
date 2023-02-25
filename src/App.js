import React, { useState, useEffect, useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import Search from "./components/Search";
import SearchElastic from "./components/SearchElastic";
import SearchResults from "./components/SearchResults";
import Pagination from "./components/Pagination";
import SearchCyrillicSwitch from "./components/SearchCyrillicSwitch";
import ViewCyrillicSwitch from "./components/ViewCyrillicSwitch";
import SearchElasticSwitch from "./components/SearchElasticSwitch";
import WordDefinition from "./components/Worddef";
import {
  searchAndFetchRecords,
  elasticSearchAndFetchRecords,
  getWordDefiniton,
} from "./utils/records.js";

function App() {
  const [definition, setDefinition] = useState("");
  const [foundWords, setFoundWords] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isCyrillic, setIsCyrillic] = useState(false);
  const [searchCyrillic, setSearchCyrillic] = useState(false);
  const [searchElastic, setSearchElastic] = useState(true);
  const [fuzziness, setFuzziness] = useState(2);

  //states for pagination
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const fetchRecords = useCallback(
    (value) => {
      if (searchElastic) {
        elasticSearchAndFetchRecords(value, setFoundWords, fuzziness);
      } else {
        searchAndFetchRecords(value, searchCyrillic, setFoundWords);
      }
    },
    [searchCyrillic, searchElastic, fuzziness]
  );

  useEffect(() => {
    // Fetch the records only if the input value is not empty
    if (inputValue) {
      fetchRecords(inputValue);
    } else {
      setFoundWords([]);
    }
  }, [inputValue, fetchRecords]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setPage(1);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchRecords(event.target.value);
  };

  const fetchAndDisplayWordDef = (id) => {
    getWordDefiniton(id, isCyrillic, setDefinition);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const handleIsCyrChange = (event) => {
    setIsCyrillic(event.target.checked);
  };

  const handleSearchCyrillic = (event) => {
    setSearchCyrillic(event.target.checked);
  };

  return (
    <div className="container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Izohli Lugat</Navbar.Brand>
      </Navbar>
      <div style={{ marginBottom: "20px" }}>
        {searchElastic ? (
          <SearchElastic
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
            fuzziness={fuzziness}
            setFuzziness={setFuzziness}
          />
        ) : (
          <Search
            inputValue={inputValue}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        )}

        <SearchCyrillicSwitch
          searchCyrillic={searchCyrillic}
          handleSearchCyrillic={handleSearchCyrillic}
        />
        <ViewCyrillicSwitch
          viewCyrillic={isCyrillic}
          handleViewCyrillic={handleIsCyrChange}
        />
        <SearchElasticSwitch
          searchElastic={searchElastic}
          handleSearchElastic={(event) => {
            setSearchElastic(event.target.checked);
          }}
        />
      </div>
      <div className="row">
        <div className="col-md-6">
          <SearchResults
            foundWords={foundWords}
            fetchAndDisplayWordDef={fetchAndDisplayWordDef}
            page={page}
            pageSize={pageSize}
            isCyrillic={isCyrillic}
          />
          <Pagination
            page={page}
            pageSize={pageSize}
            total={foundWords.length}
            onPageChange={handlePageChange}
          />
        </div>
        <WordDefinition definition={definition} />
      </div>
    </div>
  );
}

export default App;
