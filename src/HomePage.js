import React, { useState } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import ProductCard from "./componets/ProductCard";

function HomePage({ tShirts, addToCart, searchTerm }) {
  const [filters, setFilters] = useState({
    gender: [],
    color: [],
    type: [],
    available :[],
    priceRange: "",
  });

  const handleFilterChange = (e) => {
    const { name, value, checked } = e.target;
    if (name === "priceRange") {
      setFilters({
        ...filters,
        [name]: checked ? value : "",
      });
    } else {
      if (checked) {
        setFilters({
          ...filters,
          [name]: [...filters[name], value],
        });
      } else {
        setFilters({
          ...filters,
          [name]: filters[name].filter((item) => item !== value),
        });
      }
    }
  };

  // const handleAvalabilityChnage = (e) =>{
  //   if(availableQty == 0 ){
  //     setFilters({
  //       ...filters,
  //       [available]:[filters[]]
  //     })
  //   }
  // }

  const getPriceRange = (price) => {
    if (price >= 0 && price <= 100) return "0-100";
    if (price > 100 && price <= 500) return "100-500";
    if (price > 500 && price <= 1000) return "500-1000";
    return "1000+";
  };

  const filteredTShirts = tShirts.filter((tShirt) => {
    const priceInRange =
      filters.priceRange === "" ||
      getPriceRange(tShirt.price) === filters.priceRange;
    return (
      priceInRange &&
      (filters.gender.length === 0 || filters.gender.includes(tShirt.gender)) &&
      (filters.color.length === 0 ||
        filters.color.some(
          (color) => tShirt.color.toLowerCase() === color.toLowerCase()
        )) &&
        ((filters.available.length === 0 ) || 
       (tShirt.availableQty > 0 && filters.available.includes('available')) ||
       (tShirt.availableQty === 0 && filters.available.includes('notavailable'))
      ) &&
      (filters.type.length === 0 ||
        filters.type.some(
          (type) => tShirt.type.toLowerCase() === type.toLowerCase()
        )) &&
      (tShirt.name.toLowerCase().includes(searchTerm) ||
        tShirt.color.toLowerCase().includes(searchTerm) ||
        tShirt.type.toLowerCase().includes(searchTerm))
    );
  });

  return (
    <Container>
      <style>
        {`
          .custom-label {
            font-weight: 500;
            font-size: 1rem;
            color: #333;
          }

          .type {
            margin-left: 0.8rem;
          }
        `}
      </style>

      <Row>
        <Col sm={3}>
          <div className="filters">
            <Form style={{ marginTop: "20px" }}>
              <Row className="mb-3">
                <Col>
                  <Form.Group>
                    <Form.Label className="custom-label">Gender</Form.Label>
                    <div className="type">
                      <Form.Check
                        type="checkbox"
                        label="Men"
                        name="gender"
                        value="Men"
                        checked={filters.gender.includes("Men")}
                        onChange={handleFilterChange}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Women"
                        name="gender"
                        value="Women"
                        checked={filters.gender.includes("Women")}
                        onChange={handleFilterChange}
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Group>
                    <Form.Label className="custom-label">Color</Form.Label>
                    <div className="type">
                      <Form.Check
                        type="checkbox"
                        label="Red"
                        name="color"
                        value="Red"
                        checked={filters.color.includes("Red")}
                        onChange={handleFilterChange}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Blue"
                        name="color"
                        value="Blue"
                        checked={filters.color.includes("Blue")}
                        onChange={handleFilterChange}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Green"
                        name="color"
                        value="Green"
                        checked={filters.color.includes("Green")}
                        onChange={handleFilterChange}
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Group>
                    <Form.Label className="custom-label">Type</Form.Label>
                    <div className="type">
                      <Form.Check
                        type="checkbox"
                        label="Polo"
                        name="type"
                        value="Polo"
                        checked={filters.type.includes("Polo")}
                        onChange={handleFilterChange}
                      />
                      <Form.Check
                        type="checkbox"
                        label="T-Shirt"
                        name="type"
                        value="T-Shirt"
                        checked={filters.type.includes("T-Shirt")}
                        onChange={handleFilterChange}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Sweatshirt"
                        name="type"
                        value="Sweatshirt"
                        checked={filters.type.includes("Sweatshirt")}
                        onChange={handleFilterChange}
                      />
                      <Form.Check
                        type="checkbox"
                        label="Hoodie"
                        name="type"
                        value="Hoodie"
                        checked={filters.type.includes("Hoodie")}
                        onChange={handleFilterChange}
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
                <Col>
                  <Form.Group>
                    <Form.Label className="custom-label">
                      Price Range
                    </Form.Label>
                    <div className="type">
                      <Form.Check
                        type="checkbox"
                        label="All Prices"
                        name="priceRange"
                        value=""
                        checked={filters.priceRange === ""}
                        onChange={handleFilterChange}
                      />
                      <Form.Check
                        type="checkbox"
                        label="0 - 100"
                        name="priceRange"
                        value="0-100"
                        checked={filters.priceRange === "0-100"}
                        onChange={handleFilterChange}
                      />
                      <Form.Check
                        type="checkbox"
                        label="100 - 500"
                        name="priceRange"
                        value="100-500"
                        checked={filters.priceRange === "100-500"}
                        onChange={handleFilterChange}
                      />
                      <Form.Check
                        type="checkbox"
                        label="500 - 1000"
                        name="priceRange"
                        value="500-1000"
                        checked={filters.priceRange === "500-1000"}
                        onChange={handleFilterChange}
                      />
                      <Form.Check
                        type="checkbox"
                        label="1000+"
                        name="priceRange"
                        value="1000+"
                        checked={filters.priceRange === "1000+"}
                        onChange={handleFilterChange}
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-3">
              <Col>
                  <Form.Group>
                    <Form.Label className="custom-label">
                      Avaliability
                    </Form.Label>
                    <div className="type">
                      <Form.Check
                        type="checkbox"
                        label="available"
                        name="available"
                        value="available"
                        checked={filters.available.includes('available')}
                        onChange={handleFilterChange}
                      />
                      <Form.Check
                        type="checkbox"
                        label="not available"
                        name="available"
                        value="notavailable"
                        checked={filters.available.includes('notavailable')}
                        onChange={handleFilterChange}
                      />
                       
                    </div>
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </div>
        </Col>
        <Col sm={9}>
          <div className="catalog" style={{ marginTop: "40px" }}>
            <Row xs={1} sm={1} md={2} lg={3} xl={3} xxl={4}>
              {filteredTShirts.map((tShirt) => (
                <Col
                  key={tShirt.id}
                  sm={12 / filteredTShirts.length}
                  md={6}
                  lg={4}
                >
                  <ProductCard tShirt={tShirt} addToCart={addToCart} />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default HomePage;
