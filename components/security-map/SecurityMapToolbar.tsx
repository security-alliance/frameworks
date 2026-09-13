import type { KeyboardEvent } from "react";
import { useState } from "react";
import type { SecurityMapView } from "./types";
import type { FilterState, GraphIndex, SearchHit } from "./graphIndex";
import { NODE_TYPE_LABELS } from "./types";

export function SecurityMapToolbar({
  index,
  query,
  setQuery,
  searchHits,
  filters,
  setFilterGroup,
  clearFilters,
  onSelectNode,
  views,
  onSelectView,
  liveMessage,
}: {
  index: GraphIndex;
  query: string;
  setQuery: (value: string) => void;
  searchHits: SearchHit[];
  filters: FilterState;
  setFilterGroup: (key: keyof FilterState, values: string[]) => void;
  clearFilters: () => void;
  onSelectNode: (id: string) => void;
  views: SecurityMapView[];
  onSelectView: (view: SecurityMapView) => void;
  liveMessage: string;
}) {
  const [active, setActive] = useState(0);

  function onKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (!searchHits.length) return;
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setActive((n) => Math.min(n + 1, searchHits.length - 1));
    } else if (event.key === "ArrowUp") {
      event.preventDefault();
      setActive((n) => Math.max(n - 1, 0));
    } else if (event.key === "Enter") {
      event.preventDefault();
      const hit = searchHits[active];
      if (hit) onSelectNode(hit.node.id);
    }
  }

  return (
    <div className="sm-toolbar">
      <div className="sm-search">
        <label htmlFor="sm-search-input">Search the Security Map</label>
        <input
          id="sm-search-input"
          type="search"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setActive(0);
          }}
          onKeyDown={onKeyDown}
          placeholder="Titles, aliases, tags, summaries"
          autoComplete="off"
          aria-autocomplete="list"
          aria-controls="sm-search-results"
        />
        <p className="sm-sr" aria-live="polite">
          {query.trim()
            ? `${searchHits.length} result${searchHits.length === 1 ? "" : "s"}`
            : liveMessage}
        </p>
        {query.trim() ? (
          searchHits.length ? (
            <ul className="sm-results" id="sm-search-results" role="listbox">
              {searchHits.map((hit, i) => (
                <li key={hit.node.id} role="option" aria-selected={i === active}>
                  <button type="button" onClick={() => onSelectNode(hit.node.id)}>
                    <span className="sm-result-type">{NODE_TYPE_LABELS[hit.node.type]}</span>
                    {hit.node.title}
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="sm-empty">No matching nodes.</p>
          )
        ) : null}
      </div>
      <p className="sm-help">
        Filters combine with AND across groups and OR within a group. Severity is a default
        triage hint, not a universal ranking.
      </p>
      <div className="sm-filters">
        <FilterSelect
          label="Type"
          values={index.graph.taxonomies.nodeTypes.map((t) => t.id)}
          titles={Object.fromEntries(index.graph.taxonomies.nodeTypes.map((t) => [t.id, t.title]))}
          selected={filters.types}
          onChange={(values) => setFilterGroup("types", values)}
        />
        <FilterSelect
          label="Domain"
          values={index.domainIds}
          titles={index.domainTitle}
          selected={filters.domains}
          onChange={(values) => setFilterGroup("domains", values)}
        />
        <FilterSelect
          label="Role"
          values={index.graph.taxonomies.roles.map((t) => t.id)}
          titles={Object.fromEntries(index.graph.taxonomies.roles.map((t) => [t.id, t.title]))}
          selected={filters.roles}
          onChange={(values) => setFilterGroup("roles", values)}
        />
        <FilterSelect
          label="Lifecycle"
          values={index.graph.taxonomies.lifecycle.map((t) => t.id)}
          titles={Object.fromEntries(index.graph.taxonomies.lifecycle.map((t) => [t.id, t.title]))}
          selected={filters.lifecycle}
          onChange={(values) => setFilterGroup("lifecycle", values)}
        />
        <FilterSelect
          label="Severity"
          values={index.graph.taxonomies.severities.map((t) => t.id)}
          titles={Object.fromEntries(index.graph.taxonomies.severities.map((t) => [t.id, t.title]))}
          selected={filters.severities}
          onChange={(values) => setFilterGroup("severities", values)}
        />
        <button type="button" className="sm-btn" onClick={clearFilters}>
          Clear filters
        </button>
      </div>
      <div className="sm-entry-row">
        {views
          .filter((v) => v.kind === "entry")
          .map((view) => (
            <button key={view.id} type="button" className="sm-view" onClick={() => onSelectView(view)}>
              <h3>{view.title}</h3>
              <p>{view.summary}</p>
            </button>
          ))}
      </div>
    </div>
  );
}

function FilterSelect({
  label,
  values,
  titles,
  selected,
  onChange,
}: {
  label: string;
  values: string[];
  titles: Record<string, string>;
  selected: string[];
  onChange: (values: string[]) => void;
}) {
  return (
    <label>
      {label}
      <select
        className="sm-select"
        multiple
        value={selected}
        onChange={(e) => {
          onChange(Array.from(e.target.selectedOptions, (o) => o.value));
        }}
      >
        {values.map((id) => (
          <option key={id} value={id}>
            {titles[id] || id}
          </option>
        ))}
      </select>
    </label>
  );
}
