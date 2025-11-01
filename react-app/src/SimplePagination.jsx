import React, { useState } from "react";

function SimplePagination() {
  const data = Array.from({ length: 10 }, (_, i) => `Item ${i + 1}`);
  const [page, setPage] = useState(1);
  const perPage = 3;

  const start = (page - 1) * perPage;
  const paginatedData = data.slice(start, start + perPage);

  return (
    <div>
      <h2>📄 Simple Pagination</h2>
      <ul>
        {paginatedData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div>
        <button disabled={page === 1} onClick={() => setPage(page - 1)}>
          Previous
        </button>
        <span style={{ margin: "0 10px" }}>Page {page}</span>
        <button disabled={start + perPage >= data.length} onClick={() => setPage(page + 1)}>
          Next
        </button>
      </div>
    </div>
  );
}

export default SimplePagination;
