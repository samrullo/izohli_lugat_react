# when the number of fetched records is too high, I want to paginate them

```javascript
import React, { useState, useEffect } from 'react';

const Pagination = ({ page, pageSize, total, onPageChange }) => {
  const pageCount = Math.ceil(total / pageSize);

  return (
    <div>
      <button disabled={page === 1} onClick={() => onPageChange(page - 1)}>
        Previous
      </button>
      <span>Page {page} of {pageCount}</span>
      <button disabled={page === pageCount} onClick={() => onPageChange(page + 1)}>
        Next
      </button>
    </div>
  );
};

const App = () => {
  const [inputValue, setInputValue] = useState('');
  const [records, setRecords] = useState([]);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    // Fetch the records only if the input value is not empty
    if (inputValue) {
      fetchRecords(inputValue);
    } else {
      setRecords([]);
    }
  }, [inputValue]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
    setPage(1);
  };

  const fetchRecords = (value) => {
    // Example API call to fetch records matching the input value
    fetch(`https://api.example.com/records?q=${value}`)
      .then((response) => response.json())
      .then((data) => {
        setRecords(data.records);
      });
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
      />
      <ul>
        {records
          .slice((page - 1) * pageSize, page * pageSize)
          .map((record) => (
            <li key={record.id}>{record.name}</li>
          ))}
      </ul>
      <Pagination
        page={page}
        pageSize={pageSize}
        total={records.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default App;
```


- why do we use useEffect, what is its difference with previous version where we don't use useEffect

The useEffect hook is used to perform side effects in a React component, such as fetching data from an API or updating the state in response to a change in a prop or state.

In the previous version of the code where useEffect was not used, the records were fetched every time the input value changed in the handleInputChange function. This meant that for every keystroke, a new API call was made, even if the input value was not complete or the user was still typing.

By using the useEffect hook, we can ensure that the records are fetched only when the inputValue changes, and not for every keystroke. This makes the code more efficient and reduces the number of unnecessary API calls.

The useEffect hook takes two arguments: a callback function that performs the side effect, and a dependency array that determines when the effect should be executed. In this case, the effect should be executed only when the inputValue changes, so the dependency array is [inputValue]. This means that the effect will be executed only when inputValue changes, and not for every render.



