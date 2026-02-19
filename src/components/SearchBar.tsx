"use client";

import {
  InputGroupButton,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

function SearchBar({ onSearch }: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleSearch = () => {
    onSearch(value);
  };

  return (
    <div>
      <InputGroup className="mb-6">
        <InputGroupInput
          placeholder="Recherche"
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <InputGroupAddon align="inline-end">
          <InputGroupButton
            variant="secondary"
            size="xs"
            onClick={handleSearch}
          >
            Rechercher
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}

export { SearchBar };
