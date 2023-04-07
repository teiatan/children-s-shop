import { useState } from "react";
import PropTypes from "prop-types";
import { Form, Input, Label, Button, Tag } from "./SearchForm.styled";


export function SearchForm({handleSearchSubmit}) {

    const [input, setInput] = useState("");

    const onChange = e => {
        setInput(e.currentTarget.value.toLowerCase());
    }; 

    const onSubmit = e => {
        e.preventDefault();
        handleSearchSubmit(input);
        resetForm();
    };

    const resetForm = () => {
        setInput("");
    }
    return (
        <Tag>
            <Form onSubmit={onSubmit}>
                <Button type="submit">🔍
                    <Label>Search</Label>
                </Button>
            
                <Input
                    type="text"
                    autocomplete="off"
                    autoFocus
                    placeholder="Знайти товар за назвою"
                    value={input}
                    onChange={onChange}
            />
            </Form>
        </Tag>
    );
};

SearchForm.propTypes = {
    handleSearchSubmit: PropTypes.func,
}