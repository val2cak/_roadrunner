import { Row, Col } from 'react-bootstrap';

const SearchInput = () => {
    return (
        <Row className="bg-white pl-4 md:pl-16 py-10 font-regular">
            <Col sm={12}>
                <input
                    id="search-input"
                    type="text"
                    className="searchInput text-3xl md:text-4xl"
                    placeholder={'find topic...'}
                />
            </Col>
        </Row>
    );
};

export default SearchInput;
