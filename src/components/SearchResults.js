import ListGroup from "react-bootstrap/ListGroup";

const SearchResults = ({
  foundWords,
  fetchAndDisplayWordDef,
  page,
  pageSize,
  isCyrillic,
  searchCyrillic,
}) => {
  return (
    <ListGroup>
      {foundWords
        .slice((page - 1) * pageSize, page * pageSize)
        .map((found_word) => (
          <ListGroup.Item
            action
            key={found_word.id}
            onClick={() =>
              fetchAndDisplayWordDef(found_word.id)
            }
          >
            {isCyrillic ? found_word.cyr : found_word.latin}
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
};

export default SearchResults;
