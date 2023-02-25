const searchAndFetchRecords = (value, searchCyrillic, setFoundWords) => {
  // Example API call to fetch records matching the input value
  const char_type = searchCyrillic ? "cyr" : "latin";
  fetch(`http://${process.env.REACT_APP_DOMAIN_NAME}/api/v1/search/${char_type}/${value}`)
    .then((response) => response.json())
    .then((found_words_data) => {
      setFoundWords(found_words_data);
    });
};

const elasticSearchAndFetchRecords = (
  value,  
  setFoundWords,
  fuzziness
) => {
  const api_url = `http://${process.env.REACT_APP_DOMAIN_NAME}/api/v1/elastic/search/${value}/${fuzziness}`;
  //console.log(`my api url is ${api_url}`);
  fetch(api_url)
    .then((response) => response.json())
    .then((found_words_data) => {
      setFoundWords(found_words_data);
    });
};

const getWordDefiniton = (id, isCyrillic, setDefinition) => {
  fetch(`http://${process.env.REACT_APP_DOMAIN_NAME}/api/v1/word/${id}`)
    .then((response) => response.json())
    .then((data) => {
      const word_def = isCyrillic ? data.cyr_def : data.latin_def;
      setDefinition(word_def);
    });
};

export {
  searchAndFetchRecords,
  elasticSearchAndFetchRecords,
  getWordDefiniton,
};
